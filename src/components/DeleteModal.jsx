import styled from 'styled-components'
import { Modal } from './Modal'
import { Text } from './Text'
import { useTranslation } from 'react-i18next'
import { Button } from './buttons/Button'

export const DeleteModal = ({ visible, setVisible, deleteFn, text }) => {
  const { t } = useTranslation()
  return (
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      onEnterPress={() => setVisible(false)}
      style={{ zIndex: 1000 }}
    >
      <Text type='h6' style={{ textAlign: 'center', padding: '10px' }}>
        {text}
      </Text>
      <ButtonsWrapper>
        <Button
          style={{ borderRadius: 8 }}
          fullWidth
          variant='primary'
          title={t('Delete')}
          type='submit'
          onClick={deleteFn}
        />
        <Button
          style={{ borderRadius: 8 }}
          fullWidth
          variant='secondary'
          title={t('Cancel')}
          onClick={() => setVisible(false)}
        />
      </ButtonsWrapper>
    </Modal>
  )
}

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 34px;
`
