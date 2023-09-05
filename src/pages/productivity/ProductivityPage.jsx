import styled, { css } from 'styled-components'
import { getBreakpointsStyles } from '../../styles/breakpoints'

export const ProductivityPage = () => {
  return <Wrapper></Wrapper>
}

export default ProductivityPage

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${colors.content};
    border-radius: 16px;
    padding: 60px 11vw;
    ${getBreakpointsStyles({
      tablet: css`
        padding: 40px 23vw;
      `,
      mobile: css`
        padding: 40px 18px;
      `,
    })}
  `}
`
