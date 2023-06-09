import { createPortal } from 'react-dom'
import styled, { css, useTheme } from 'styled-components'
import { CloseIcon } from '../assets/icons'
import { OpacityButton } from './buttons/OpacityButton'
import { useEffect } from 'react'
import { getBreakpointsStyles } from '../styles/breakpoints'

export const Modal = ({ visible, style, onClose, onEnterPress, children }) => {
  const { colors } = useTheme()

  useEffect(() => {
    const onKeyDown = (event) => {
      switch (event.code) {
        case 'Enter':
          onEnterPress?.()
          break
        case 'Escape':
          onClose?.()
          break
      }
    }

    if (visible) document.addEventListener('keydown', onKeyDown)
    else document.removeEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [visible])

  return createPortal(
    <>
      <OpacityButton hoverOpacity={0.975} activeOpacity={0.9} onClick={onClose}>
        <Overlay visible={visible} />
      </OpacityButton>
      <ModalWindow style={style} visible={visible}>
        <CloseButtonWrapper onClick={onClose}>
          <CloseIcon color={colors.text} />
        </CloseButtonWrapper>
        {children}
      </ModalWindow>
    </>,
    document.querySelector('#modal-root'),
  )
}

const ModalWindow = styled.div`
  ${({ theme: { colors, shadows }, visible }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    height: fit-content;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    visibility: ${visible ? 'visible' : 'hidden'};
    transform: translate(-50%, -50%) scale(${visible ? 1 : 0});
    transition: transform 0.2s;
    background-color: ${colors.modalBackground};
    box-shadow: ${shadows.modalShadow};
    border-radius: 8px;

    ${getBreakpointsStyles({
      desktop: css`
        padding: 32px;
        width: 30%;
        min-width: 400px;
      `,
      tablet: css`
        padding: 32px;
        width: 80vw;
      `,
      mobile: css`
        padding: 28px 28px;
        width: calc(100% - 40px);
      `,
    })}
  `}
`

const CloseButtonWrapper = styled(OpacityButton)`
  position: absolute;
  top: 14px;
  right: 14px;
`

const Overlay = styled.div`
  ${({ theme: { colors }, visible }) => css`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    visibility: ${visible ? 'visible' : 'hidden'};
    transition: opacity 0.4s;
    opacity: ${visible ? 0.8 : 0};
    background-color: ${colors.modalOverlay};
  `}
`
