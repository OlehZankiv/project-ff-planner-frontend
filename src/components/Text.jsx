import styled, { css } from 'styled-components'
import { getMobileStyles } from '../styles/breakpoints'

const H1 = styled.h1`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 104}px;
    font-weight: ${fontWeight ?? 700};
    line-height: ${lineHeight ?? 104};

    ${getMobileStyles(css`
      font-size: ${fontSize ?? 80}px;
    `)}
  `}
`

const H2 = styled.h2`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 40}px;
    font-weight: ${fontWeight ?? 700};
    line-height: ${lineHeight ?? 44}px;

    ${getMobileStyles(css`
      font-size: ${fontSize ?? 32}px;
      line-height: ${lineHeight ?? 40}px;
    `)}
  `}
`

const H3 = styled.h3`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 24}px;
    font-weight: ${fontWeight ?? 600};
    line-height: ${lineHeight ?? 28}px;
  `}
`

const H4 = styled.h4`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 14}px;
    font-weight: ${fontWeight ?? 600};
    line-height: ${lineHeight ?? 18}px;
  `}
`

const H5 = styled.h5`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 18}px;
    font-weight: ${fontWeight ?? 700};
    line-height: ${lineHeight ?? 18}px;
  `}
`

const H6 = styled.h6`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 16}px;
    font-weight: ${fontWeight ?? 500};
    line-height: ${lineHeight ?? 18}px;
  `}
`

const P = styled.p`
  ${({ theme, color = 'text', fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors[color]};

    font-size: ${fontSize ?? 14}px;
    font-weight: ${fontWeight ?? 500};
    line-height: ${lineHeight ?? 18}px;
  `}
`

export const Text = ({ type, fontSize, fontWeight, lineHeight, color, style, children }) => {
  switch (type.toLowerCase()) {
    case 'h1':
      return (
        <H1
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
