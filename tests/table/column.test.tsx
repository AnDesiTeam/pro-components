import { mount } from 'enzyme';
import React from 'react';
import { ConfigProvider } from 'antd';
import ProTable from '@ant-design/pro-table';
import { request } from './demo';
import { waitForComponentToPaint } from '../util';
import moment from 'moment';
import { MenuOutlined } from '@ant-design/icons';

describe('Table ColumnSetting', () => {
  it('🎏 render', async () => {
    const callBack = jest.fn();
    const html = mount(
      <ProTable
        size="small"
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            render: (text) => callBack(text),
          },
        ]}
        request={request}
        rowKey="key"
      />,
    );
    await waitForComponentToPaint(html, 1200);
    expect(callBack).toBeCalled();
    expect(callBack).toBeCalledWith('Edward King 0');
  });

  it('🎏 query should parse by valueType', async () => {
    const callBack = jest.fn();
    const html = mount(
      <ProTable
        size="small"
        columns={[
          {
            title: 'date',
            key: 'date',
            dataIndex: 'date',
            valueType: 'date',
          },
        ]}
        form={{
          initialValues: {
            date: moment(),
          },
        }}
        request={async (params) => {
          console.log(params);
          callBack(params.date);
          return {
            data: [
              {
                key: '1',
                date: moment(),
              },
            ],
            success: true,
          };
        }}
        rowKey="key"
      />,
    );
    await waitForComponentToPaint(html, 1000);
    expect(callBack).toBeCalled();
    expect(callBack).toBeCalledWith('2016-11-22');
  });

  it('🎏 config provide render', async () => {
    const html = mount(
      <ConfigProvider prefixCls="qixian">
        <ProTable
          size="small"
          columns={[
            {
              title: 'Name',
              key: 'name',
              dataIndex: 'name',
            },
          ]}
          request={request}
          rowKey="key"
        />
      </ConfigProvider>,
    );
    await waitForComponentToPaint(html, 1200);
    expect(html.render()).toMatchSnapshot();
  });

  it('🎏 render text', async () => {
    const callBack = jest.fn();
    const html = mount(
      <ProTable
        size="small"
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            renderText: (text) => callBack(text),
          },
          {
            title: 'Name2',
            key: 'name2',
            dataIndex: 'name2',
            valueType: false,
          },
        ]}
        request={request}
        rowKey="key"
      />,
    );
    await waitForComponentToPaint(html, 1200);
    expect(callBack).toBeCalled();
    expect(callBack).toBeCalledWith('Edward King 0');
  });

  it('🎏 change text by renderText', async () => {
    const html = mount(
      <ProTable
        size="small"
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            renderText: (text) => `${text}2144`,
          },
        ]}
        search={false}
        request={request}
        rowKey="key"
      />,
    );
    await waitForComponentToPaint(html, 1200);
    expect(html.find('td.ant-table-cell')).toMatchSnapshot();
  });
  it('🎏 [dragSort] render drag sort default handle by dragSortKey', async () => {
    const html = mount(
      <ProTable
        size="small"
        columns={[
          {
            title: '排序',
            dataIndex: 'sort',
          },
          {
            title: '姓名',
            dataIndex: 'name',
            className: 'drag-visible',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '地址',
            dataIndex: 'address',
          },
        ]}
        request={request}
        rowKey="key"
        dragSortKey="sort"
      />,
    );
    await waitForComponentToPaint(html, 1200);
    expect(html.find('.dragSortDefaultHandle')).toMatchSnapshot();
  });

  it('🎏 [dragSort] render drag sort custom handle by dragSortHandlerRender', async () => {
    const dragHandleRender = (rowData: any, idx: any) => (
      <>
        <MenuOutlined className="dragSortCustomHandle" style={{ cursor: 'grab', color: 'gold' }} />
        {idx + 1} - {rowData.name}
      </>
    );
    const html = mount(
      <ProTable
        size="small"
        columns={[
          {
            title: '排序',
            dataIndex: 'sort',
          },
          {
            title: '姓名',
            dataIndex: 'name',
            className: 'drag-visible',
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '地址',
            dataIndex: 'address',
          },
        ]}
        request={request}
        rowKey="key"
        dragSortKey="sort"
        dragSortHandlerRender={dragHandleRender}
      />,
    );
    await waitForComponentToPaint(html, 1200);
    expect(html.find('.dragSortCustomHandle')).toMatchSnapshot();
  });
});
