import styled from 'styled-components'
import { Modal } from '../Modal'
import { Text } from '../Text'
import { useTranslation } from 'react-i18next'
import { Button } from '../buttons/Button'

export const DeleteModal = ({
  visible,
  setVisible,
  onDelete,
  text,
  title,
  isLoading,
  showWithoutModalNextTime,
  onWithoutModalNextTimeChange,
}) => {
  const { t } = useTranslation()

  const decline = () => {
    setVisible(false)
    onWithoutModalNextTimeChange(false)
  }

  return (
    <Modal visible={visible} onClose={decline} onEnterPress={onDelete}>
      <DeleteModalWrap>
        <Text type='h3' fontSize={28} style={{ marginBottom: 30 }}>
          {title}
        </Text>
        <Text type='p' style={{ marginBottom: 20 }}>
          {text}
        </Text>
        <CheckWrapper>
          <input
            type='checkbox'
            checked={showWithoutModalNextTime}
            onChange={() => onWithoutModalNextTimeChange((prev) => !prev)}
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
            isLoading={isLoading}
            onClick={onDelete}
          />
          <Button
            style={{ borderRadius: 8 }}
            fullWidth
            variant='secondary'
            title={t('No')}
            onClick={decline}
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
