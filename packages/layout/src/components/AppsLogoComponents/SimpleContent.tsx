import { isUrl } from '@ant-design/pro-utils';
import React from 'react';
import type { AppItemProps } from './types';

/**
 * simple模式渲染logo的方式
 *
 * @param logo
 * @param title
 * @returns
 */
export const renderLogo = (
  logo: React.ReactNode | (() => React.ReactNode),
  title?: React.ReactNode,
): React.ReactNode => {
  if (logo && typeof logo === 'string' && isUrl(logo)) {
    return <img src={logo} alt="logo" />;
  }

  if (typeof logo === 'function') {
    return logo();
  }

  if (logo && typeof logo === 'string') {
    return <div id="avatarLogo">{logo}</div>;
  }

  if (!logo && title && typeof title === 'string') {
    const symbol = title.substring(0, 1);
    return <div id="avatarLogo">{symbol}</div>;
  }
  return logo;
};

export const SimpleContent: React.FC<{
  appListRender?: AppItemProps[];
  itemClick?: (item: AppItemProps) => void;
  baseClassName: string;
  hashId?: string;
}> = (props) => {
  const { appListRender, baseClassName, hashId, itemClick } = props;
  return (
    <div className={`${baseClassName}-content ${hashId}`.trim()}>
      <ul className={`${baseClassName}-content-list ${hashId}`.trim()}>
        {appListRender?.map((app, index) => {
          if (app?.children?.length) {
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`${baseClassName}-content-list-item-group ${hashId}`.trim()}
              >
                <div
                  className={`${baseClassName}-content-list-item-group-title ${hashId}`.trim()}
                >
                  {app.title}
                </div>
                <SimpleContent
                  hashId={hashId}
                  itemClick={itemClick}
                  appListRender={app?.children}
                  baseClassName={baseClassName}
                />
              </div>
            );
          }
          return (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`${baseClassName}-content-list-item ${hashId}`.trim()}
            >
              <a
                href={itemClick ? 'javascript:;' : app.url}
                onClick={() => itemClick?.(app)}
                target={app.target}
                rel="noreferrer"
              >
                {renderLogo(app.icon, app.title)}
                <div>
                  <div>{app.title}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
