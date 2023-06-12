import { useMutation } from '@tanstack/react-query'
import { queryKeys } from '../queryKeys'
import { useTranslation } from 'react-i18next'
import { handleRequestSuccess } from '../../../utils/notifications'
import { verify } from '../../../api'
import { useSearchParams } from 'react-router-dom'

const VERIFY_TOKEN = 'verificationToken'

export const useVerify = () => {
  const { t } = useTranslation()

  const [params, setParams] = useSearchParams()

  const verifyToken = params.get(VERIFY_TOKEN)

  const { mutate, isLoading } = useMutation({
    mutationKey: [queryKeys.verify],
    mutationFn: verify,
    onSuccess: () => {
      handleRequestSuccess(t('The user was verified'))

      params.delete(VERIFY_TOKEN)
      setParams(params)
    },
  })

  return {
    verify: () => verifyToken && mutate(verifyToken),
    isLoading,
  }
}
