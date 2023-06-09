import { Image, Text } from '../../../components'
import styled, { css } from 'styled-components'
import { getBreakpointsStyles, getDesktopStyles } from '../../../styles/breakpoints'

export const ContentItem = ({
  index,
  category,
  subtitle,
  description,
  orientation = 'left',
  image,
}) => (
  <Wrapper orientation={orientation}>
    <ContentBox orientation={orientation}>
      <Text type='h1' color='primary'>
        {index}
      </Text>
      {category && (
        <CategoryBox>
          <Text type='h2' color='primary'>
            {category}
          </Text>
        </CategoryBox>
      )}
      <Text type='h2' style={{ marginTop: 8 }}>
        {subtitle}
      </Text>
      <Text type='p' style={{ marginTop: 24 }}>
        {description}
      </Text>
    </ContentBox>
    <ImageBox>
      <Image width='100%' {...image} />
    </ImageBox>
  </Wrapper>
)

const Wrapper = styled.div`
  ${({ orientation }) => css`
    display: flex;
    flex-direction: column;
    gap: 40px;

    ${getDesktopStyles(css`
      justify-content: space-between;
      flex-direction: ${orientation === 'left' ? 'row' : 'row-reverse'};
      align-items: center;
    `)}
  `}
`

const ContentBox = styled.div`
  ${({ orientation }) => css`
    ${getBreakpointsStyles({
      desktop: css`
        width: 40%;
        padding-left: ${orientation === 'left' ? '2vw' : 0};
      `,
      tablet: css`
        width: 50%;
        align-self: ${orientation === 'left' ? 'flex-start' : 'flex-end'};
      `,
      mobile: css`
        width: 100%;
      `,
    })}
  `}
`

const ImageBox = styled.div`
  ${getDesktopStyles(css`
    width: 40%;
  `)}
`

const CategoryBox = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 18px;
    background: ${theme.colors.secondaryBackground};
    border-radius: 44px;
    margin-top: 14px;
  `}
`
