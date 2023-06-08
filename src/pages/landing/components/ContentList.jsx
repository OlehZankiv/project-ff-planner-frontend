import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'

import {
  Calendar_examples,
  Calendar_examples_2x,
  Calendar_examples_3x,
  Sidebars,
  Sidebars_2x,
  Sidebars_3x,
  Days_layout,
  Days_layout_2x,
  Days_layout_3x,
} from '../../../assets/images/pictures'
import { Image, generateSrcConfig } from '../../../components/Image'
import { getBreakpointsStyles } from '../../../styles/breakpoints'

export const ContentList = () => {
  const { t } = useTranslation()
 

  return (
    <ContentWrap>
      <ContentItem>
        <ContentBox>
          <Number>1.</Number>
          <Category>{t('Calendar')}</Category>
          <SubTitle>{t('View')}</SubTitle>
          <Text>
            {t(
              "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
            )}
          </Text>
        </ContentBox>

        <Image
          srcSetConfiguration={generateSrcConfig({
            desktop: { src: Calendar_examples_3x, width: 1800, widthOnScreen: 50 },
            tablet: { src: Calendar_examples_2x, width: 1400, widthOnScreen: 90 },
            mobile: { src: Calendar_examples, width: 335, widthOnScreen: 90 },
          })}
          alt='calendar examples'
        />
      </ContentItem>
      <ContentItem>
        <ContentBox>
          <Number>2.</Number>
          <SubTitle>{t('Sidebar')}</SubTitle>
          <Text>
            {t(
              'GooseTrack offers easy access to your account settings, calendar, and filters. The My Account section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.',
            )}
          </Text>
        </ContentBox>

        <Image
          srcSetConfiguration={generateSrcConfig({
            desktop: { src: Sidebars_3x, width: 1800, widthOnScreen: 50 },
            tablet: { src: Sidebars_2x, width: 1400, widthOnScreen: 90 },
            mobile: { src: Sidebars, width: 335, widthOnScreen: 90 },
          })}
          alt='sidebars'
        />
      </ContentItem>
      <ContentItem>
        <ContentBox>
          <Number>3.</Number>
          <Category>{t('All in')}</Category>
          <SubTitle>{t('One')}</SubTitle>
          <Text>
            {t(
              'GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.',
            )}
          </Text>
        </ContentBox>

        <Image
          srcSetConfiguration={generateSrcConfig({
            desktop: { src: Days_layout_3x, width: 1800, widthOnScreen: 50 },
            tablet: { src: Days_layout_2x, width: 1400, widthOnScreen: 90 },
            mobile: { src: Days_layout, width: 335, widthOnScreen: 90 },
          })}
          alt='days layout'
        />
      </ContentItem>
    </ContentWrap>
  )
}

export const ContentWrap = styled.ul`
  padding: 64px 20px;
  ${getBreakpointsStyles({
    tablet: css`
      padding: 64px 32px;
    `,
    desktop: css`
      padding: 64px 128px;
    `,
  })}
`

const ContentItem = styled.li`
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;
    flex-wrap: wrap;

  &:last-child {
    padding-bottom: 0;
  };

  &:nth-child(2n) {
    align-items: end;
  };

  ${getBreakpointsStyles({
    tablet: css`
      flex-wrap: wrap;
      gap: 48px;
    `,

    desktop: css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 228px;
      flex-wrap: nowrap;
    `,
  })};
    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
`

const ContentBox = styled.div`
  ${getBreakpointsStyles({
    desktop: css`
      width: 50%;
    `,
  })}
`

const Number = styled.p`
  ${({ theme }) => css`
    margin-bottom: 14px;
    font-weight: 700;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -4px;
    color: ${theme.colors.primary};
  `}
  ${getBreakpointsStyles({
    tablet: css`
      font-size: 104px;
    `,
  })}
`

const Category = styled.h2`
  ${({ theme }) => css`
    display: inline-block;
    padding: 8px 18px;
    margin-bottom: 8px;
    color: ${theme.colors.primary};
    background: #dcebf7;
    border-radius: 44px;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
  `}
  ${getBreakpointsStyles({
    tablet: css`
      padding: 6px 18px;
      font-size: 40px;
      line-height: 44px;
    `,
  })}
`

const SubTitle = styled.h2`
  margin-bottom: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  ${getBreakpointsStyles({
    tablet: css`
      margin-bottom: 24px;
      font-size: 40px;
      line-height: 44px;
    `,
  })}
`

const Text = styled.p`
  padding-bottom: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(17, 17, 17, 0.9);

  ${getBreakpointsStyles({
    tablet: css`
      padding-bottom: 48px;
    `,

    desktop: css`
      padding-bottom: 0;
    `,
  })}
`
