import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ProField from '@ant-design/pro-field';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { DatePickerProps } from 'antd/lib/date-picker';
import { createField } from '../../BaseForm';

/**
 * 文本选择组件
 * @param
 */
const ProFormTextArea: React.ForwardRefRenderFunction<
  any,
  FormItemProps & DatePickerProps
> = ({ value, ...restProps }, ref) => {
  return (
    <Form.Item {...restProps}>
      <ProField
        text={value}
        ref={ref}
        mode="edit"
        valueType="textarea"
        {...restProps}
      />
    </Form.Item>
  );
};

export default createField(React.forwardRef(ProFormTextArea));
