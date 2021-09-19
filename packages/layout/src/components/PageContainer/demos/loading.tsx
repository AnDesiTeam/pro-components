import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        height: '100vh',
        background: '#F5F7FA',
      }}
    >
      <PageContainer
        ghost
        loading
        header={{
          title: '页面标题',
          breadcrumb: {
            routes: [
              {
                path: '',
                breadcrumbName: '一级页面',
              },
              {
                path: '',
                breadcrumbName: '二级页面',
              },
              {
                path: '',
                breadcrumbName: '当前页面',
              },
            ],
          },
        }}
      >
        <div
          style={{
            height: '100vh',
          }}
        >
          加载中这里不显示
        </div>
      </PageContainer>
      <PageContainer
        ghost
        loading={[
          loading,
          <div style={{ color: 'red', padding: '30px', textAlign: 'center' }}>自定义加载...</div>,
        ]}
        header={{
          title: '自定义loading，3s后显示内容',
          breadcrumb: {
            routes: [
              {
                path: '',
                breadcrumbName: '一级页面',
              },
              {
                path: '',
                breadcrumbName: '二级页面',
              },
              {
                path: '',
                breadcrumbName: '当前页面',
              },
            ],
          },
        }}
      >
        <div
          style={{
            height: '100vh',
          }}
        >
          加载中这里不显示
        </div>
      </PageContainer>
    </div>
  );
};
