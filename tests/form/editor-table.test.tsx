import React, { useRef } from 'react';
import { Tag, Space, Button } from 'antd';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { EditableProTable, TableRowEditable, ProColumns, ActionType } from '@ant-design/pro-table';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { waitForComponentToPaint } from '../util';

interface GithubIssueItem {
  id: number;
  title?: string;
  labels?: {
    name: string;
    color: string;
  }[];
  state?: string;
  created_at?: string;
}

const defaultData: GithubIssueItem[] = [
  {
    id: 624748504,
    title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
    labels: [{ name: 'bug', color: 'error' }],
    created_at: '2020-05-26T09:42:56Z',
    state: 'processing',
  },
  {
    id: 624691229,
    title: '🐛 [BUG]无法创建工程npm create umi',
    labels: [{ name: 'bug', color: 'error' }],
    created_at: '2020-05-26T08:19:22Z',
    state: 'closed',
  },
  {
    id: 624674790,
    title: '🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）',
    labels: [{ name: 'question', color: 'success' }],
    state: 'open',
    created_at: '2020-05-26T07:54:25Z',
  },
];

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '30%',
    search: false,
  },
  {
    title: '状态',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
    valueType: 'select',
    width: 120,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
      processing: {
        text: '解决中',
        status: 'Processing',
      },
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 80,
    render: (_, row) => (
      <Space>
        {row?.labels?.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'created_at',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, row, _, action) => [
      <a
        key="editor"
        id="editor"
        onClick={() => {
          action.setEditable?.(row.id);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const EditorProTableDemo = (
  props: {
    type?: 'multiple';
    defaultKeys?: React.Key[];
    editorRowKeys?: React.Key[];
    onEditorChange?: (editorRowKeys: React.Key[]) => void;
    dataSource?: GithubIssueItem[];
    onDataSourceChange?: (dataSource: GithubIssueItem[]) => void;
  } & TableRowEditable<GithubIssueItem>,
) => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditorRowKeys] = useMergedState<React.Key[]>(
    () => props.defaultKeys || [],
    {
      value: props.editorRowKeys,
      onChange: props.onEditorChange,
    },
  );
  const [dataSource, setDataSource] = useMergedState<GithubIssueItem[]>([], {
    value: props.dataSource,
    onChange: props.onDataSourceChange,
  });
  return (
    <EditableProTable<GithubIssueItem>
      rowKey="id"
      toolBarRender={() => [
        <Button
          key="addLine"
          id="addLine"
          onClick={() => {
            const newItem = {
              id: dataSource.length,
            };
            const source = [...dataSource, newItem];
            setDataSource(source);
            // 这里的 key 与 rowKey 的 key 是相同的，需要注意
            // 如果没有设置 rowKey 就用行号
            setEditorRowKeys([...editableKeys, newItem.id]);
          }}
        >
          增加一行
        </Button>,
      ]}
      columns={columns}
      actionRef={actionRef}
      request={async () => ({
        data: defaultData,
        total: 3,
        success: true,
      })}
      value={dataSource}
      onChange={setDataSource}
      editable={{
        ...props,
        type: props.type,
        editableKeys,
        onSave: props.onSave,
        onChange: setEditorRowKeys,
      }}
    />
  );
};

describe('EditorProTable', () => {
  it('📝  support onEditorChange', async () => {
    const fn = jest.fn();
    const wrapper = mount(
      <EditorProTableDemo
        onEditorChange={(keys) => {
          fn(keys);
        }}
      />,
    );
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(0).simulate('click');
    });

    expect(fn).toBeCalledWith([624748504]);
  });

  it('📝  support editorRowKeys', async () => {
    const wrapper = mount(<EditorProTableDemo editorRowKeys={[624748504]} />);
    await waitForComponentToPaint(wrapper, 1000);
    // 第一行应该编辑态
    expect(
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(0).find('input').exists(),
    ).toBeTruthy();

    // 第二行不应该是编辑态
    expect(
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find('input').exists(),
    ).toBeFalsy();
  });

  it('📝 type=singe, only edit one rows', async () => {
    const fn = jest.fn();
    const wrapper = mount(
      <EditorProTableDemo
        defaultKeys={[624748504]}
        onEditorChange={(keys) => {
          fn(keys);
        }}
      />,
    );
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(0).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 1000);

    expect(fn).not.toBeCalled();
  });

  it('📝 type=singe, only edit one rows', async () => {
    const fn = jest.fn();
    const wrapper = mount(
      <EditorProTableDemo
        defaultKeys={[624748504]}
        onEditorChange={(keys) => {
          fn(keys);
        }}
      />,
    );
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(0).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 1000);

    expect(fn).not.toBeCalled();
  });

  it('📝 type=multiple, edit multiple rows', async () => {
    const fn = jest.fn();
    const wrapper = mount(
      <EditorProTableDemo
        type="multiple"
        defaultKeys={[624748504]}
        onEditorChange={(keys) => {
          fn(keys);
        }}
      />,
    );
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(0).simulate('click');
    });
    await waitForComponentToPaint(wrapper, 1000);
    expect(fn).toBeCalledWith([624748504, 624691229]);
  });

  it('📝 support onSave', async () => {
    const fn = jest.fn();
    const wrapper = mount(<EditorProTableDemo onSave={(key) => fn(key)} />);
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(1).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    expect(
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find('input').exists(),
    ).toBeTruthy();

    act(() => {
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find(`td a`).at(0).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    expect(fn).toBeCalledWith(624691229);
  });

  it('📝 support onDelete', async () => {
    const fn = jest.fn();
    const wrapper = mount(<EditorProTableDemo onDelete={(key) => fn(key)} />);
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(1).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    expect(
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find('input').exists(),
    ).toBeTruthy();

    act(() => {
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find(`td a`).at(1).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    expect(fn).toBeCalledWith(624691229);
  });

  it('📝 support form rules', async () => {
    const fn = jest.fn();
    const wrapper = mount(<EditorProTableDemo onSave={(key, row) => fn(row.title)} />);
    await waitForComponentToPaint(wrapper, 1000);
    act(() => {
      wrapper.find('#editor').at(1).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    expect(
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find('input').exists(),
    ).toBeTruthy();

    act(() => {
      wrapper
        .find('.ant-table-tbody tr.ant-table-row')
        .at(1)
        .find(`td .ant-input`)
        .at(0)
        .simulate('change', {
          target: {
            value: '',
          },
        });
    });
    act(() => {
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find(`td a`).at(0).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    // 没有通过验证，不触发 onSave
    expect(fn).not.toBeCalled();

    act(() => {
      wrapper
        .find('.ant-table-tbody tr.ant-table-row')
        .at(1)
        .find(`td .ant-input`)
        .at(0)
        .simulate('change', {
          target: {
            value: 'qixian',
          },
        });
    });

    act(() => {
      wrapper.find('.ant-table-tbody tr.ant-table-row').at(1).find(`td a`).at(0).simulate('click');
    });

    await waitForComponentToPaint(wrapper, 200);

    expect(fn).toBeCalledWith('qixian');
  });
});
