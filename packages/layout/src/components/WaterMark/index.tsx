import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';

export type WaterMarkProps = {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: React.CSSProperties;
  /** 水印样式 */
  markStyle?: React.CSSProperties;
  /** 水印类名 */
  markClassName?: string;
  /** 水印之间的水平间距 */
  gapX?: number;
  /** 水印之间的垂直间距 */
  gapY?: number;
  /** 追加的水印元素的z-index */
  zIndex?: number;
  /** 水印的宽度 */
  width?: number;
  /** 水印的高度 */
  height?: number;
  /** 水印在canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置, 即 offsetTop = gapY / 2 */
  offsetTop?: number; // 水印图片距离绘制 canvas 单元的顶部距离
  /** 水印在canvas 画布上绘制的水平偏移量, 正常情况下，水印绘制在中间位置, 即 offsetTop = gapX / 2 */
  offsetLeft?: number;
  /** 水印绘制时，旋转的角度，单位 ° */
  rotate?: number;
  /** ClassName 前缀 */
  prefixCls?: string;
  /** 高清印图片源, 为了高清屏幕显示，建议使用 2倍或3倍图，优先使用图片渲染水印。 */
  image?: string;
  /** 水印文字内容 */
  content?: string | string[];
  /** 文字颜色 */
  fontColor?: string;
  /** 文字样式 */
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
  /** 文字族 */
  fontFamily?: string;
  /** 文字粗细 */
  fontWeight?: 'normal' | 'light' | 'weight' | number;
  /** 文字大小 */
  fontSize?: number | string;
  /** 多行水印文字行高 **/
  fontLineHeight?: number;

  children?: React.ReactNode;
};
/**
 * 返回当前显示设备的物理像素分辨率与CSS像素分辨率之比
 *
 * @param context
 * @see api 有些废弃了，其实类型 CanvasRenderingContext2D
 */
const getPixelRatio = (context: any) => {
  if (!context) {
    return 1;
  }
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};

const WaterMark: React.FC<WaterMarkProps> = (props) => {
  const {
    children,
    style,
    className,
    markStyle,
    markClassName,
    // antd 内容层 zIndex 基本上在 10 以下 https://github.com/ant-design/ant-design/blob/6192403b2ce517c017f9e58a32d58774921c10cd/components/style/themes/default.less#L335
    zIndex = 9,
    gapX = 212,
    gapY = 222,
    width = 120,
    height = 64,
    rotate = -22, // 默认旋转 -22 度
    image,
    content,
    offsetLeft,
    offsetTop,
    fontLineHeight = 0,
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = 'rgba(0,0,0,.15)',
    fontSize = 16,
    fontFamily = 'sans-serif',
    prefixCls: customizePrefixCls,
  } = props;

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-layout-watermark', customizePrefixCls);
  const wrapperCls = classNames(`${prefixCls}-wrapper`, className);
  const waterMakrCls = classNames(prefixCls, markClassName);
  const [base64Url, setBase64Url] = useState('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ratio = getPixelRatio(ctx);

    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    const canvasOffsetLeft = offsetLeft || gapX / 2;
    const canvasOffsetTop = offsetTop || gapY / 2;

    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      // 旋转字符 rotate
      ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      const markWidth = width * ratio;
      const markHeight = height * ratio;

      if (image) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, markWidth, markHeight);
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        const markSize = Number(fontSize) * ratio
        let watermark: string[] = []
        if (typeof content === 'string') {
          if (content.includes('\n')) {
            watermark = content.split('\n')
          } else {
            watermark.push(content)
          }
        } else if (Array.isArray(content)) {
          watermark = content
        }
        for (let i = 0; i < watermark.length; i++) {
          ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`
          ctx.fillStyle = fontColor
          let y = i * markSize
          if (i > 0) {
            y += fontLineHeight
          }
          const text = watermark[i]
          ctx.fillText(text, 0, y)
        }
        setBase64Url(canvas.toDataURL())
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('当前环境不支持Canvas');
    }
  }, [
    gapX,
    gapY,
    offsetLeft,
    offsetTop,
    rotate,
    fontStyle,
    fontWeight,
    width,
    height,
    fontFamily,
    fontColor,
    image,
    content,
    fontSize,
  ]);

  return (
    <div
      style={{
        position: 'relative',
        ...style,
      }}
      className={wrapperCls}
    >
      {children}
      <div
        className={waterMakrCls}
        style={{
          zIndex,
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          backgroundSize: `${gapX + width}px`,
          pointerEvents: 'none',
          backgroundRepeat: 'repeat',
          backgroundImage: `url('${base64Url}')`,
          ...markStyle,
        }}
      />
    </div>
  );
};

export default WaterMark;
© 2022 GitHub, Inc.
