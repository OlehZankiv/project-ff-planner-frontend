import styled, { css, useTheme } from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../navigation/routes'

import { AppLogo, Button, generateSrcConfig } from '../../components/'
import { LoginIcon } from '../../assets/icons/'
import { getBreakpointsStyles, getMobileStyles } from '../../styles/breakpoints'
import {
  Calendar_examples,
  Calendar_examples_2x,
  Calendar_examples_3x,
  Days_layout,
  Days_layout_2x,
  Days_layout_3x,
  Sidebars,
  Sidebars_2x,
  Sidebars_3x,
} from '../../assets/images'
import { ContentItem } from './components/ContentItem'

const LandingPage = () => {
  const { t } = useTranslation()
  const { colors } = useTheme()
  const navigate = useNavigate()

  const items = [
    {
      category: t('Calendar'),
      subtitle: t('View'),
      description: t(
        "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
      ),
      image: {
        srcSetConfiguration: generateSrcConfig({
          desktop: { src: Calendar_examples_3x, width: 1800, widthOnScreen: 50 },
          tablet: { src: Calendar_examples_2x, width: 1400, widthOnScreen: 90 },
          mobile: { src: Calendar_examples, width: 335, widthOnScreen: 90 },
        }),
      },
      orientation: 'left',
      alt: 'calendar examples',
    },
    {
      subtitle: t('Sidebar'),
      description: t(
        'GooseTrack offers easy access to your account settings, calendar, and filters. The My Account section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.',
      ),
      image: {
        srcSetConfiguration: generateSrcConfig({
          desktop: { src: Sidebars_3x, width: 1800, widthOnScreen: 50 },
          tablet: { src: Sidebars_2x, width: 1400, widthOnScreen: 90 },
          mobile: { src: Sidebars, width: 335, widthOnScreen: 90 },
        }),
      },
      orientation: 'right',
      alt: 'sidebars',
    },
    {
      category: t('All in'),

      subtitle: t('One'),
      description: t(
        'GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.',
      ),
      image: {
        srcSetConfiguration: generateSrcConfig({
          desktop: { src: Days_layout_3x, width: 1800, widthOnScreen: 50 },
          tablet: { src: Days_layout_2x, width: 1400, widthOnScreen: 90 },
          mobile: { src: Days_layout, width: 335, widthOnScreen: 90 },
        }),
      },
      orientation: 'left',
      alt: 'days layout',
    },
  ]

  return (
    <Container>
      <Hero>
        <AppLogo />
        <LinkBox>
          <Button
            type='submit'
            variant='secondary'
            rightIcon={<LoginIcon color={colors.primary} />}
            title={t('Log in')}
            onClick={() => navigate(ROUTES.LOGIN)}
          />
          <SignupLink to={ROUTES.REGISTER}>{t('Sign Up')}</SignupLink>
        </LinkBox>
      </Hero>
      <ListWrapper>
        {items.map((item, index) => (
          <ContentItem key={index} {...item} index={`${index + 1}.`} />
        ))}
      </ListWrapper>
    </Container>
  )
}

export default LandingPage

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    background-color: ${theme.colors.background};
  `}
`

export const Hero = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.content};
  `}
`

export const LinkBox = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${getBreakpointsStyles({
    desktop: css`
      margin-top: 40px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 24px;
    `,
  })},
`

export const SignupLink = styled(NavLink)`
  ${({ theme }) => css`
    ${getMobileStyles(css`
      bottom: 88px;
      position: absolute;
    `)}

    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    text-shadow: 0 47px 355px rgba(0, 0, 0, 0.07), 0 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    color: ${theme.colors.white};
    transition: all 0.25s ease-in-out;

    &:hover {
      color: ${theme.colors.linkHover};
      cursor: pointer;
      text-decoration: none;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 8px ${theme.colors.linkHover};
    }

    &:active {
      color: ${theme.colors.primary};
    }
  `}

  ${getBreakpointsStyles({
    tablet: css`
      font-size: 14px;
      line-height: 18px;
    `,
    desktop: css`
      font-size: 14px;
      line-height: 18px;
    `,
  })},
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 20px;
  gap: 64px;

  ${getBreakpointsStyles({
    tablet: css`
      padding: 64px 32px;
    `,
    desktop: css`
      padding: 64px 128px;
    `,
  })}
`
