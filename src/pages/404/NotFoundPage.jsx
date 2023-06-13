import { useNavigate } from 'react-router-dom'
import styled, { css, useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, Text } from '../../components'
import { ROUTES } from '../../navigation/routes'
import { ArrowCircleIcon } from '../../assets/icons'
import { getDesktopStyles, ScreenWrapper } from '../../styles/breakpoints'

const NotFoundPage = () => {
  const { colors } = useTheme()
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <Wrapper>
      <ScreenWrapper tablet={<div />} mobile={<div />} />
      <TextWrapper>
        <Text type='h1' color='primary'>
          404
        </Text>
        <Text
          type='h2'
          color='primary'
          tabletStyles={{ fontSize: 28 }}
          mobileStyles={{ fontSize: 20, lineHeight: 1.3 }}
        >
          {t('Oh! The page you were looking for was probably stolen by geese')}
        </Text>
      </TextWrapper>
      <Button
        style={{ marginTop: 64 }}
        type='submit'
        title={t('Go Back')}
        variant='primary'
        buttonTextProps={{ fontSize: 24 }}
        leftIcon={
          <IconWrapper>
            <ArrowCircleIcon size={34} color={colors.white} />
          </IconWrapper>
        }
        onClick={() => navigate(ROUTES.CALENDAR)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    height: 100vh;
    width: 100vw;
    padding: 64px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.secondaryBackground};

    ${getDesktopStyles(css`
      row-gap: 64px;
      justify-content: center;
    `)}
  `}
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 32px;
  text-align: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  margin-right: 8px;
`

export default NotFoundPage
