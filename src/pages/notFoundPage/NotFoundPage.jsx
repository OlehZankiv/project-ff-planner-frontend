import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { LoginIcon } from '../../assets/icons'
import { Button } from '../../components'
import { ROUTES } from '../../navigation/routes'
import { getBreakpointsStyles } from '../../styles/breakpoints'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <Wrapper>
      <TextWrapper>
      <ErrorText>404</ErrorText>
          <InfoText>{t('Oh! The page you were looking for was probably stolen by geese')}</InfoText>
        <ActionText>{t('Go back where you came from')}</ActionText>
        </TextWrapper>
      <Button
        style={{ marginTop: '20px' }}
        type='submit'
        width='300px'
        rightIcon={<LoginIcon color={'white'} />}
        title={t('Back to Home Page')}
        variant='primary'
        onClick={() => navigate(ROUTES.CALENDAR)}
      />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
  max-width: 1000px;
  height: 400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    top: 0;
    left: 0;
    overflow: auto; */
    background-color: ${colors.secondaryBackground};
  `}

`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ErrorText = styled.p`
  ${({ theme: { colors } }) => css`
    font-weight: 600;
    font-size: 205px;
    text-align: center;
    color: ${colors.primary};
    ${getBreakpointsStyles({
        desktop: css`
          font-size: 205px;
        `,
        tablet: css`
          font-size: 170px;

        `,
        mobile: css`
          font-size: 135px;
        `,
      })}
  `}
`

export const InfoText = styled.p`
  ${({ theme: { colors } }) => css`
    font-weight: 600;
    text-align: center;
    color: ${colors.userNameText};
    ${getBreakpointsStyles({
        desktop: css`
    font-size: 22px;
        padding-top: 25px;
        `,
        tablet: css`
    font-size: 22px;
        padding-top: 25px;

        `,
        mobile: css`
    font-size: 18px;
        padding-top: 20px;
        `,
      })}
  `}
`

export const ActionText = styled.p`
  ${({ theme: { colors } }) => css`
    font-weight: 600;
    text-align: center;
    color: ${colors.userNameText};
    ${getBreakpointsStyles({
        desktop: css`
    font-size: 18px;
    padding-top: 20px;
        `,
        tablet: css`
    font-size: 18px;
    padding-top: 20px;

        `,
        mobile: css`
    font-size: 16px;
        padding-top: 15px;
        `,
      })}
  `}
`
