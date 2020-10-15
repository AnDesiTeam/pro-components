﻿import React, { useState } from 'react';
import { Drawer } from 'antd';
import { FormProps } from 'antd/lib/form';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { DrawerProps } from 'antd/lib/drawer';
import { Store } from 'antd/lib/form/interface';
import omit from 'omit.js';

import BaseForm, { CommonFormProps } from '../../BaseForm';

export type DrawerFormProps = Omit<FormProps, 'onFinish'> &
  CommonFormProps & {
    /**
     * @name 表单结束后调用
     * @description  接受返回一个boolean，返回 true 会关掉这个抽屉
     */
    onFinish?: (formData: Store) => Promise<boolean | void>;

    /**
     * @name 用于触发抽屉打开的 dom
     */
    trigger?: React.ReactNode;

    /**
     * @name 受控的打开关闭
     */
    visible?: DrawerProps['visible'];

    /**
     * @name 打开关闭的事件
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @name 抽屉的属性
     * @description 不支持 'visible'，请使用全局的 visible
     */
    drawerProps?: Omit<DrawerProps, 'visible'>;
  };

const DrawerForm: React.FC<DrawerFormProps> = ({
  children,
  trigger,
  onVisibleChange,
  drawerProps,
  onFinish,
  ...rest
}) => {
  const [visible, setVisible] = useMergedState<boolean>(!!rest.visible, {
    value: rest.visible,
    onChange: onVisibleChange,
  });
  const [loading, setLoading] = useState(false);
  return (
    <>
      <BaseForm
        layout="vertical"
        {...omit(rest, ['visible'])}
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
          resetButtonProps: {
            onClick: () => setVisible(false),
          },
          submitButtonProps: {
            loading,
          },
          ...rest.submitter,
        }}
        onFinish={async (values) => {
          if (!onFinish) {
            return;
          }
          setLoading(true);
          const success = await onFinish(values);
          if (success) {
            setVisible(false);
          }
          setLoading(false);
        }}
        contentRender={(item, submitter) => {
          return (
            <Drawer
              getContainer={false}
              width={800}
              {...drawerProps}
              visible={visible}
              onClose={(e) => {
                setVisible(false);
                drawerProps?.onClose?.(e);
              }}
              footer={submitter}
            >
              {item}
            </Drawer>
          );
        }}
      >
        {children}
      </BaseForm>
      {trigger && <div onClick={() => setVisible(!visible)}>{trigger}</div>}
    </>
  );
};

export default DrawerForm;
