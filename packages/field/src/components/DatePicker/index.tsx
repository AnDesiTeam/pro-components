import type { DatePickerProps } from 'antd';
import { DatePicker, ConfigProvider } from 'antd';
import React, { useState, useContext, useImperativeHandle, useRef } from 'react';
import moment from 'moment';
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, parseValueToMoment } from '@ant-design/pro-utils';
import type { ProFieldFC } from '../../index';
import './index.less';

/**
 * 日期选择组件
 *
 * @param
 */
const FieldDatePicker: ProFieldFC<{
  text: string | number;
  format: string;
  showTime?: boolean;
  bordered?: boolean;
  picker?: DatePickerProps['picker'];
}> = (
  {
    text,
    mode,
    format,
    label,
    light,
    render,
    renderFormItem,
    plain,
    showTime,
    fieldProps,
    picker,
    bordered,
  },
  ref,
) => {
  const intl = useIntl();
  const size = useContext(ConfigProvider.SizeContext);
  const datePickerRef = useRef<HTMLInputElement>();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-field-date-picker');
  const [open, setOpen] = useState<boolean>(false);
  useImperativeHandle(ref, () => datePickerRef.current);
  if (mode === 'read') {
    const dom = text ? moment(text).format(fieldProps.format || format || 'YYYY-MM-DD') : '-';
    if (render) {
      return render(text, { mode, ...fieldProps }, <>{dom}</>);
    }
    return <>{dom}</>;
  }
  if (mode === 'edit' || mode === 'update') {
    let dom;
    const {
      disabled,
      value,
      onChange,
      allowClear,
      placeholder = intl.getMessage('tableForm.selectPlaceholder', '请选择'),
    } = fieldProps;

    const momentValue = parseValueToMoment(value) as moment.Moment;

    if (light) {
      const valueStr: string = (momentValue && momentValue.format(format)) || '';
      dom = (
        <div
          className={`${prefixCls}-light`}
          onClick={() => {
            setOpen(true);
          }}
        >
          <DatePicker
            picker={picker}
            showTime={showTime}
            format={format}
            ref={datePickerRef}
            {...fieldProps}
            value={momentValue}
            onChange={(v) => {
              onChange?.(v);
              setTimeout(() => {
                setOpen(false);
              }, 0);
            }}
            onOpenChange={setOpen}
            open={open}
          />
          <FieldLabel
            label={label}
            disabled={disabled}
            placeholder={placeholder}
            size={size}
            value={valueStr}
            onClear={() => {
              onChange?.(null);
            }}
            allowClear={allowClear}
            bordered={bordered}
            expanded={open}
          />
        </div>
      );
    } else {
      dom = (
        <DatePicker
          picker={picker}
          showTime={showTime}
          format={format}
          placeholder={placeholder}
          bordered={plain === undefined ? true : !plain}
          ref={ref}
          {...fieldProps}
          value={momentValue}
        />
      );
    }
    if (renderFormItem) {
      return renderFormItem(text, { mode, ...fieldProps }, dom);
    }
    return dom;
  }
  return null;
};

export default React.forwardRef(FieldDatePicker);
