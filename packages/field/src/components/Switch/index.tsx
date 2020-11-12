import React from 'react';
import { Switch } from 'antd';
import { SwitchProps } from 'antd/lib/switch';
import { ProFieldFC } from '../../index';

/**
 * 评分组件
 * @param
 */
const FieldSwitch: ProFieldFC<{ text: boolean; fieldProps?: SwitchProps }> = (
  { text, mode, render, renderFormItem, fieldProps },
  ref,
) => {
  if (mode === 'read') {
    const dom = text ? fieldProps?.checkedChildren : fieldProps?.unCheckedChildren;
    if (render) {
      return render(text, { mode, ...fieldProps }, <>{dom}</>);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    const dom = <Switch ref={ref} {...fieldProps} />;
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default React.forwardRef(FieldSwitch);
