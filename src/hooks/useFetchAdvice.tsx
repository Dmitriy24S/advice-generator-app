import { useQuery } from 'react-query'
import { IAdvice, IData } from '../types'

export const useFetchAdvice = () => {
  // const fetchAdvice = async ():Promise<IData> => {
  const fetchAdvice = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      console.log('res', res)
      const data: IData = await res.json()
      console.log('data', data)
      // {
      // slip: {
      // id: 218,
      // advice: "Gratitude is said to be the secret to happiness.",
      //       }
      // }
      return data.slip
    } catch (error) {
      console.log('catch error', error)
      // TypeError: Failed to fetch
      // at Object.fetchAdvice [as queryFn] (useFetchAdvice.tsx:8:25)
      // at Object.fetchFn2 [as fn]
      throw Error()
      // throw new Error()
      // Promise.reject()
    }
  }
  // status: "idle" | "error" | "loading" | "success"
  // data: any // data: IData | undefined
  const { data, status, refetch } = useQuery<IAdvice>({
    queryKey: ['advice'],
    queryFn: fetchAdvice,
    refetchOnWindowFocus: false
  })
  console.log('status', status)
  console.log('data', data)

  return { data, status, refetch }
}
