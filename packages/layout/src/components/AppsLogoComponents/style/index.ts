﻿import type { GenerateStyle, ProAliasToken } from '@ant-design/pro-utils';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
import { genAppsLogoComponentsDefaultListStyle } from './default';
import { genAppsLogoComponentsSimpleListStyle } from './simple';

export interface AppsLogoComponentsToken extends ProAliasToken {
  componentCls: string;
}

const genAppsLogoComponentsStyle: GenerateStyle<AppsLogoComponentsToken> = (token) => {
  return {
    [token.componentCls]: {
      '&-icon': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInline: 4,
        paddingBlock: 0,
        fontSize: 14,
        lineHeight: '14px',
        height: 28,
        width: 28,
        cursor: 'pointer',
        color: token?.layout?.colorTextAppListIcon,
        '&:hover': {
          color: token?.layout?.colorTextAppListIconHover,
          backgroundColor: token?.layout?.colorBgAppListIconHover,
        },
        '&-active': {
          color: token?.layout?.colorTextAppListIconHover,
          backgroundColor: token?.layout?.colorBgAppListIconHover,
        },
      },
      '&-popover': {
        [`${token.antCls}-popover-arrow`]: {
          display: 'none',
        },
        '*': {
          boxSizing: 'border-box',
          fontFamily: token.fontFamily,
        },
      },
      '&-simple': genAppsLogoComponentsSimpleListStyle(token),
      '&-default': genAppsLogoComponentsDefaultListStyle(token),
    },
  };
};

export function useStyle(prefixCls: string) {
  return useAntdStyle('AppsLogoComponents', (token) => {
    const proCardToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    } as AppsLogoComponentsToken;

    return [genAppsLogoComponentsStyle(proCardToken)];
  });
}
