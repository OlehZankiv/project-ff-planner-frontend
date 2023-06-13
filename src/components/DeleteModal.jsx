import styled from 'styled-components'
import { useState } from 'react'
import { Modal } from './Modal'
import { Text } from './Text'
import { useTranslation } from 'react-i18next'
import { Button } from './buttons/Button'

export const DeleteModal = ({ visible, setVisible, deleteFn, text, title, setIsAskingAgain }) => {
  const { t } = useTranslation()
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      onEnterPress={() => setVisible(false)}
    >
      <DeleteModalWrap>
        <Text type='h3' fontSize={28} style={{ marginBottom: '30px' }}>
          {title}
        </Text>
        <Text type='p' style={{ marginBottom: '20px' }}>
          {text}
        </Text>
        <CheckWrapper>
          <input
            type='checkbox'
            checked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked)
              setIsAskingAgain(isChecked)
            }}
          />
          <Text type='p' fontSize={12}>
            {t("Don't show it again?")}
          </Text>
        </CheckWrapper>
        <ButtonsWrapper>
          <Button
            style={{ borderRadius: 8 }}
            fullWidth
            variant='primary'
            title={t('Yes')}
            type='submit'
            onClick={() => {
              deleteFn()
              setVisible(false)
            }}
          />
          <Button
            style={{ borderRadius: 8 }}
            fullWidth
            variant='secondary'
            title={t('No')}
            onClick={() => setVisible(false)}
          />
        </ButtonsWrapper>
      </DeleteModalWrap>
    </Modal>
  )
}

const DeleteModalWrap = styled.div`
  padding: 10px;
`
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 34px;
`

const CheckWrapper = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
`
