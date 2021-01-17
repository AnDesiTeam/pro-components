import React, { useContext, useRef, useEffect, useImperativeHandle } from 'react';
import type { FormProps, FormInstance } from 'antd/lib/form/Form';
import { noteOnce } from 'rc-util/lib/warning';

import type { CommonFormProps } from '../../BaseForm';
import BaseForm from '../../BaseForm';
import { StepsFormProvide } from './index';

export type StepFormProps = {
  step?: number;
} & Omit<FormProps, 'onFinish'> &
  Omit<CommonFormProps, 'submitter'>;

const StepForm: React.FC<StepFormProps> = ({
  onFinish,
  step,
  formRef: propFormRef,
  ...restProps
}) => {
  const formRef = useRef<FormInstance | undefined>();
  const context = useContext(StepsFormProvide);

  // eslint-disable-next-line @typescript-eslint/dot-notation
  noteOnce(!restProps['submitter'], 'StepForm 不包含提交按钮，请在 StepsForm 上');
  /** 重置 formRef */
  useImperativeHandle(propFormRef, () => formRef.current, [formRef.current]);

  /** Dom 不存在的时候解除挂载 */
  useEffect(() => {
    return () => {
      if (restProps.name) {
        context?.unRegForm(restProps.name);
      }
    };
  }, []);

  if (context && context?.formArrayRef) {
    context.formArrayRef.current[step || 0] = formRef;
  }

  return (
    <BaseForm
      formRef={formRef}
      onFinish={async (values) => {
        if (restProps.name) {
          context?.onFormFinish(restProps.name, values);
        }
        if (onFinish) {
          context?.setLoading(true);
          // 如果报错，直接抛出
          const success = await onFinish?.(values);

          if (success) {
            context?.next();
          }
          context?.setLoading(false);
          return;
        }
        context?.next();
      }}
      layout="vertical"
      {...restProps}
    />
  );
};

export default StepForm;
