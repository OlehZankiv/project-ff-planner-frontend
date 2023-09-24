import styled from 'styled-components'
import { Modal } from '../Modal'
import { Text } from '../Text'
import { useTranslation } from 'react-i18next'
import { Input } from '../fields/Input'
import { findNumberSchema } from '../../utils/schemas'
import { Form, Formik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../buttons/Button'
import { Spinner } from '../Spinner'

const delayHelper = async (func, delay = 1000) => {
  await new Promise((res) => setTimeout(() => res(''), delay))

  func()
}

export const FindNumberModal = ({ visible, setVisible }) => {
  const { t } = useTranslation()

  const [foundNumber, setFoundNumber] = useState()
  const [buttonProps, setButtonProps] = useState({ title: t('Start') })

  const formik = useRef(null)

  const hasNumber = foundNumber !== undefined

  const close = () => {
    formik.current.resetForm()
    setFoundNumber(undefined)
    setButtonProps({ title: t('Start') })
    setVisible(false)
  }

  useEffect(() => {
    if (!visible) close()
  }, [visible])

  const submit = async () => {
    if (buttonProps.rightIcon) return
    else if (hasNumber) return close()

    const setDataWithTitle = (title) => () => setButtonProps({ rightIcon: <Spinner />, title })

    setDataWithTitle(t('Fething analitics library'))()

    await delayHelper(setDataWithTitle(t('Retina recognition')), 2000)
    await delayHelper(setDataWithTitle(t('Analising your minds')), 1500)
    await delayHelper(setDataWithTitle(t('Generating possible solutions')), 2000)
    await delayHelper(() => setButtonProps({ title: t('Amazing') }))

    setFoundNumber(formik.current?.values?.number || 0)
  }

  return (
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      onEnterPress={formik.current?.submitForm}
    >
      <Wrapper>
        {!hasNumber && (
          <Text type='h3' fontSize={28} style={{ marginBottom: 30 }}>
            {t('Find number method')}
          </Text>
        )}
        <Formik
          innerRef={formik}
          initialValues={{ number: '' }}
          onSubmit={submit}
          validationSchema={findNumberSchema}
        >
          {({ errors, touched, isValid }) => (
            <Form autoComplete='off'>
              {hasNumber ? (
                <>
                  <Text type='h6' style={{ textAlign: 'center', marginTop: 12 }} lineHeight={32}>
                    {t(
                      'After performing heavy algorithms, we came to the conclusion that your intended number is:',
                    )}
                  </Text>
                  <Text type='h1' style={{ textAlign: 'center', marginTop: 12 }}>
                    {foundNumber}
                  </Text>
                </>
              ) : (
                <Input
                  type='number'
                  name='number'
                  title={t("I don't know the value")}
                  placeholder={t('Enter your number')}
                  errorMessage={t(errors.number)}
                  successMessage={t('This value is CORRECT for the algorithm')}
                  isError={errors.number && touched.number}
                  disabled={hasNumber}
                />
              )}
              <Button
                style={{ marginTop: 32 }}
                buttonTextProps={{ lineHeight: 18, fontSize: 14 }}
                type='submit'
                fullWidth
                disabled={!isValid || !!buttonProps.rightIcon}
                variant='primary'
                {...buttonProps}
              />
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div`
  padding: 10px;
`
