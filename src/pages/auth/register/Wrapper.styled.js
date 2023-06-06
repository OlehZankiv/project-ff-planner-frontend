import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondaryBackground};
  `}
`
