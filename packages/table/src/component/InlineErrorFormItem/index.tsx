﻿import React, { useState } from 'react';
import { Form, Popover } from 'antd';
import { FormItemProps } from 'antd/lib/form';

const InlineErrorFormItem: React.FC<FormItemProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Form.Item
      style={{
        margin: '-5px 0',
      }}
      preserve={false}
      // @ts-ignore
      _internalItemRender={{
        mark: 'pro_table_render',
        render: (
          inputProps: FormItemProps & {
            errors: any[];
          },
          {
            input,
            errorList,
            extra,
          }: {
            input: JSX.Element;
            errorList: JSX.Element;
            extra: JSX.Element;
          },
        ) => {
          const { errors } = inputProps;
          return (
            <Popover
              placement="topLeft"
              visible={errors.length > 0 && visible}
              content={<div>{errorList}</div>}
              onVisibleChange={(v) => errors.length > 0 && setVisible(v)}
            >
              <div>
                {input}
                {extra}
              </div>
            </Popover>
          );
        },
      }}
      {...props}
    >
      {props.children}
    </Form.Item>
  );
};

export default InlineErrorFormItem;
