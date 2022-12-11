import { useQuery } from 'react-query'
import diceIcon from './assets/icon-dice.svg'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'

interface IAdvice {
  id: number
  advice: string
}

interface IData {
  slip: IAdvice
}

function App() {
  // const fetchAdvice = async ():Promise<IData> => {
  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    // {
    // slip: {
    // id: 218,
    // advice: "Gratitude is said to be the secret to happiness.",
    //       }
    // }
    const data: IData = await res.json()
    return data.slip
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

  return (
    <div className='App bg-gray-blue-dark min-h-screen p-4 text-center flex flex-col items-center justify-center'>
      <div className='card relative bg-gray-blue-medium rounded-lg max-w-[444px] mt-4  p-8 font-extrabold min-h-[150px]'>
        {status === 'error' && <p className='mt-4'>Error fetching data</p>}
        {status === 'loading' && <p className='mt-4'>Fetching data...</p>}
        {status === 'success' && (
          <>
            <h2 className='mb-4 text-xs uppercase tracking-[4px] text-green-neon'>
              {/* Advice #{data.slip.id} */}
              Advice #{data.id}
            </h2>
            {/* <p className='mb-6 text-2xl text-cyan-light'>“{data.slip.advice}”</p> */}
            <p className='mb-6 text-2xl text-cyan-light'>“{data.advice}”</p>
            <div className='divider pb-10'>
              <img src={dividerDesktop} alt='' className='hidden xs:block mx-auto' />
              <img src={dividerMobile} alt='' className='block xs:hidden mx-auto' />
            </div>
            <button
              type='button'
              className='btn-primary absolute w-fit -bottom-5 left-0 right-0 mx-auto bg-green-neon rounded-full p-3'
              aria-label='get new advice'
              // onClick={fetchAdvice}
              onClick={() => refetch()}
            >
              <img src={diceIcon} alt='' className='mx-auto' />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App
