﻿import { Keyframes } from '@ant-design/cssinjs';
import type { GenerateStyle, ProAliasToken } from '@ant-design/pro-provider';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';

export interface ProHelpToken extends ProAliasToken {
  componentCls: string;
}

export const actionsInputAnimal = new Keyframes('actionsInputAnimal', {
  '0%': { width: '0px' },
  '30%': { width: '20px' },
  '100%': { width: '120px' },
});

const genProHelpStyle: GenerateStyle<ProHelpToken> = (token) => {
  return {
    [`${token.componentCls}-popover-text`]: {
      color: token.colorPrimary,
      cursor: 'pointer',
      boxSizing: 'border-box',
    },
    [`${token.componentCls}-popover-content`]: {
      maxWidth: 300,
      height: '600px',
      maxHeight: 'calc(100vh - 200px)',
      overflow: 'auto',
      paddingInline: 20,
      paddingBlockStart: 24,
      paddingBlockEnd: 32,
      boxSizing: 'border-box',
    },
    [`${token.componentCls}-left-panel`]: {
      overflow: 'auto',
      boxSizing: 'border-box',
      borderInlineEnd: `${token?.lineWidth}px solid ${token?.colorBorderSecondary}`,
      minHeight: '648px',
      minWidth: 190,
      maxWidth: 190,
      '&-menu': {
        width: 190,
        boxSizing: 'border-box',
        minWidth: 190,
        height: 'calc(100% - 40px)',
        marginBlock: 20,
      },
    },
    [`${token.componentCls}-content-panel`]: {
      paddingBlock: 20,
      paddingInline: 24,
      minWidth: '200px',
      overflow: 'auto',
      flex: 1,
      boxSizing: 'border-box',
      minHeight: '648px',
    },
    [`${token.componentCls}-actions`]: {
      display: 'flex',
      boxSizing: 'border-box',
      gap: 12,
      '&-item': {
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyItems: 'center',
        padding: 4,
        height: 24,
        minWidth: 24,
        cursor: 'pointer',
        borderRadius: token.borderRadius,
        '&:hover': {
          backgroundColor: token.colorBgTextHover,
        },
      },
      '&-input': {
        margin: 0,
        maxWidth: 120,
        padding: 0,
        width: '120px',
        boxSizing: 'border-box',
        borderRadius: token.borderRadius,
        backgroundColor: token.colorBgTextHover,
        animationName: actionsInputAnimal,
        animationDuration: '0.1s',
        animationTimingFunction: 'linear',
      },
    },
  };
};

export function useStyle(prefixCls: string) {
  return useAntdStyle('ProHelp', (token) => {
    const ProLayoutHeaderToken: ProHelpToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genProHelpStyle(ProLayoutHeaderToken)];
  });
}
