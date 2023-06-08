import styled, { css, useTheme } from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../navigation/routes'

import { AppLogo } from '../../components/AppLogo'
import { LoginIcon } from '../../assets/icons/LogInIcon'
import { getBreakpointsStyles, getMobileStyles } from '../../styles/breakpoints'
import { Button } from '../../components/buttons/Button'
import { ContentList } from './components/ContentList'

const Landing = () => {
  const { t } = useTranslation()
  const { colors } = useTheme()
  const Navigate = useNavigate()

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
            onClick={() => Navigate(ROUTES.LOGIN)}
          />
          <SignupLink to={ROUTES.REGISTER}>{t('Sign Up')}</SignupLink>
        </LinkBox>
      </Hero>
      <ContentList />
    </Container>
  )
}

export default Landing

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
    })
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
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    color: ${theme.colors.white};
    transition: all 0.25s ease-in-out;

    &:hover {
      color: ${theme.colors.linkHover};
      cursor: pointer;
      text-decoration: none;
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 8px ${theme.colors.linkHover};
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
