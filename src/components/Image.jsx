import { sizes } from '../styles/breakpoints'

export const Image = ({ alt, srcSetConfiguration, loading = 'lazy', ...props }) => (
  <img
    {...props}
    src={srcSetConfiguration.tablet.src}
    srcSet={`
        ${srcSetConfiguration.desktop.src} ${srcSetConfiguration.desktop.width}w,
        ${srcSetConfiguration.tablet.src} ${srcSetConfiguration.tablet.width}w,
        ${srcSetConfiguration.mobile.src} ${srcSetConfiguration.mobile.width}w,
      `}
    sizes={`
        (min-width: ${sizes.desktop}px) ${srcSetConfiguration.desktop.widthOnScreen}vw,
        (min-width: ${sizes.tablet}px) ${srcSetConfiguration.tablet.widthOnScreen}vw,
        ${srcSetConfiguration.mobile.widthOnScreen}vw
      `}
    alt={alt}
    loading={loading}
  />
)

export const generateSrcConfig = ({
  desktop: { width: dWidth, src: dSrc, widthOnScreen: dWidthOnScreen },
  tablet: { width: tWidth, src: tSrc, widthOnScreen: tWidthOnScreen },
  mobile: { width: mWidth, src: mSrc, widthOnScreen: mWidthOnScreen },
}) => ({
  desktop: { width: dWidth, src: dSrc, widthOnScreen: dWidthOnScreen },
  tablet: { width: tWidth, src: tSrc, widthOnScreen: tWidthOnScreen },
  mobile: { width: mWidth, src: mSrc, widthOnScreen: mWidthOnScreen },
})
