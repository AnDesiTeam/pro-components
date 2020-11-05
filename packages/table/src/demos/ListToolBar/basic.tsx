import React from 'react';
import { Button } from 'antd';
import { EllipsisOutlined, SettingOutlined, FullscreenOutlined } from '@ant-design/icons';
import { LightFilter, ProFormDatePicker } from '@ant-design/pro-form';
import ProTable, { ProColumns } from '@ant-design/pro-table';

export interface TableListItem {
  key: number;
  name: string;
  containers: number;
}

const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      toolbar={{
        title: '这里是标题',
        subTitle: '这里是子标题',
        tooltip: '这是一个段描述',
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        filter: (
          <LightFilter>
            <ProFormDatePicker name="startdate" label="响应日期" />
          </LightFilter>
        ),
        actions: [
          <Button
            type="primary"
            onClick={() => {
              alert('add');
            }}
          >
            添加
          </Button>,
        ],
        settings: [
          {
            icon: <SettingOutlined />,
            tooltip: '设置',
          },
          {
            icon: <FullscreenOutlined />,
            tooltip: '全屏',
          },
        ],
      }}
      rowKey="key"
      search={false}
    />
  );
};
