import styled, { css } from 'styled-components'
import { getBreakpointsStyles, getMobileStyles } from '../styles/breakpoints'

const H1 = styled.h1`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 104}px;
    font-weight: ${fontWeight ?? 700};
    line-height: ${lineHeight ?? 104}px;

    ${getMobileStyles(css`
      font-size: ${fontSize ?? 80}px;
    `)}

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

const H2 = styled.h2`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 40}px;
    font-weight: ${fontWeight ?? 700};
    line-height: ${lineHeight ?? 44}px;

    ${getMobileStyles(css`
      font-size: ${fontSize ?? 32}px;
      line-height: ${lineHeight ?? 40}px;
    `)}

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

const H3 = styled.h3`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 24}px;
    font-weight: ${fontWeight ?? 600};
    line-height: ${lineHeight ?? 28}px;

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

const H4 = styled.h4`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 14}px;
    font-weight: ${fontWeight ?? 600};
    line-height: ${lineHeight ?? 18}px;

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

const H5 = styled.h5`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 18}px;
    font-weight: ${fontWeight ?? 700};
    line-height: ${lineHeight ?? 18}px;

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

const H6 = styled.h6`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 16}px;
    font-weight: ${fontWeight ?? 500};
    line-height: ${lineHeight ?? 18}px;

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

const P = styled.p`
  ${({
    theme,
    color = 'text',
    fontSize,
    fontWeight,
    lineHeight,
    mobileStyles,
    tabletStyles,
  }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 14}px;
    font-weight: ${fontWeight ?? 500};
    line-height: ${lineHeight ?? 18}px;

    ${getBreakpointsStyles({ tablet: tabletStyles, mobile: mobileStyles })}
  `}
`

export const Text = ({
  type,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  style,
  children,
  mobileStyles,
  tabletStyles,
}) => {
  switch (type.toLowerCase()) {
    case 'h1':
      return (
        <H1
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </H1>
      )
    case 'h2':
      return (
        <H2
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </H2>
      )
    case 'h3':
      return (
        <H3
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </H3>
      )
    case 'h4':
      return (
        <H4
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </H4>
      )
    case 'h5':
      return (
        <H5
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </H5>
      )
    case 'h6':
      return (
        <H6
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </H6>
      )
    case 'p':
      return (
        <P
          mobileStyles={mobileStyles}
          tabletStyles={tabletStyles}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
          style={style}
        >
          {children}
        </P>
      )
    default:
      return <H5>This type of text {type} is not supported</H5>
  }
}
