import { createPortal } from 'react-dom'
import styled, { css, useTheme } from 'styled-components'
import { CloseIcon } from '../assets/icons'
import { OpacityButton } from './OpacityButton'
import { useEffect } from 'react'
import { getMobileStyles } from '../styles/breakpoints'

export const Modal = ({ visible, onClose, onEnterPress, children }) => {
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
      <OpacityButton hoverOpacity={0.9} activeOpacity={0.8} onClick={onClose}>
        <Overlay visible={visible} />
      </OpacityButton>
      <Wrapper visible={visible}>
        <CloseButtonWrapper onClick={onClose}>
          <CloseIcon color={colors.text} />
        </CloseButtonWrapper>
        {children}
      </Wrapper>
    </>,
    document.querySelector('#modal-root'),
  )
}

const Wrapper = styled.div`
  ${({ theme: { colors, shadows }, visible }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    visibility: ${visible ? 'visible' : 'hidden'};
    transform: translateX(-50%) scale(${!visible ? 0 : 1});
    transition: transform 0.2s;
    padding: 28px 40px;
    background-color: ${colors.modalBackground};
    box-shadow: ${shadows.modalShadow};
    border-radius: 8px;
    min-width: 396px;
    max-width: calc(100% - 32px);
    ${getMobileStyles(
      css`
        min-width: calc(100vw - 32px);
      `,
    )}
  `}
`

const CloseButtonWrapper = styled(OpacityButton)`
  position: absolute;
  top: 14px;
  right: 14px;
`

const Overlay = styled.div`
  ${({ theme: { colors }, visible }) => css`
    position: absolute;
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
