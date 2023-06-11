import styled, { css, useTheme } from 'styled-components'
import React, { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from '../../../assets/icons'
import { useTranslation } from 'react-i18next'
import { useReviews } from '../../../hooks/query'
import { OpacityButton, Review, Text } from '../../../components'
import { getBreakpointsStyles, getDesktopStyles } from '../../../styles/breakpoints'
import { useDimensions } from '../../../hooks'

export const ReviewsSlider = () => {
  const { t } = useTranslation()
  const { colors } = useTheme()
  const { width } = useDimensions()

  const container = useRef(null)
  const itemsRef = useRef({})
  const currentIndex = useRef(0)

  const { reviews } = useReviews('best')

  const updateListPosition = (behavior) => {
    itemsRef.current[currentIndex.current]?.scrollIntoView({
      behavior,
      block: 'start',
      inline: 'start',
    })
    if (!behavior) document.body.scrollIntoView()
  }
  useEffect(updateListPosition, [width])

  useEffect(() => {
    container?.current?.addEventListener('wheel', (event) => event.preventDefault())
  }, [])

  const next = () => {
    const prev = currentIndex.current
    currentIndex.current = prev === reviews.length - 1 ? 0 : prev + 1
    updateListPosition('smooth')
  }

  const prev = () => {
    const prev = currentIndex.current
    currentIndex.current = prev === 0 ? reviews.length - 1 : prev - 1

    updateListPosition('smooth')
  }

  return (
    <Wrapper>
      <Text type='h2' color='primary'>
        {t('Reviews')}
      </Text>
      <ReviewList
        ref={container}
        onScroll={(e) => {
          e.preventDefault()
        }}
      >
        {reviews.map((review, index) => (
          <div key={review.id} ref={(ref) => (itemsRef.current[index] = ref)}>
            <Review style={{ height: '100%' }} {...review} />
          </div>
        ))}
      </ReviewList>

      <PaginationWrapper>
        <IconButton onClick={prev}>
          <ArrowLeft color={colors.text} />
        </IconButton>
        <IconButton onClick={next}>
          <ArrowRight color={colors.text} />
        </IconButton>
      </PaginationWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  padding: 0 20px;

  ${getBreakpointsStyles({
    desktop: css`
      margin-top: 100px;
      padding: 0 128px;
    `,
    tablet: css`
      padding: 0 62px;
    `,
  })}
`

const IconButton = styled(OpacityButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ReviewList = styled.div`
  display: flex;
  align-items: stretch;
  column-gap: 24px;
  margin-top: 46px;
  overflow-x: scroll;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    min-width: 100%;
  }

  ${getDesktopStyles(css`
    > div {
      min-width: calc(50% - 12px);
    }
  `)}
`

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
  margin-top: 32px;
`
