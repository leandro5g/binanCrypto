import { axiosInstance } from 'app/shared/libs/axios/client'
import { AxiosRequestConfig } from 'axios'

export type ParamsClientType = AxiosRequestConfig['params']

type AxiosClientProps = {
  method?: 'get' | 'post' | 'put'
  url: string
  params?: ParamsClientType
}

export async function axiosClient({
  method = 'get',
  url,
  params,
}: AxiosClientProps) {
  const { data } = await axiosInstance({
    method,
    url,
    params,
  })

  return data
}
