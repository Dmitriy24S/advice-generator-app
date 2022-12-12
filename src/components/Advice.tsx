import diceIcon from '../assets/icon-dice.svg'
import dividerDesktop from '../assets/pattern-divider-desktop.svg'
import dividerMobile from '../assets/pattern-divider-mobile.svg'
import { useFetchAdvice } from '../hooks/useFetchAdvice'
// import { IAdvice } from '../types'

// interface IProps {
//   data: IAdvice
// }

const Advice = () => {
  // const Advice = ({ data }: IProps) => {
  const { data, status, refetch } = useFetchAdvice()

  return (
    <>
      {status === 'error' && <p className='mt-4'>Error fetching data</p>}
      {status === 'loading' && <p className='mt-4'>Fetching data...</p>}
      {status === 'success' && data && (
        <>
          <h2 className='mb-4 text-xs uppercase tracking-[4px] text-green-neon'>
            {/* Advice #{data.slip.id} */}
            Advice #{data.id}
          </h2>
          {/* <p className='mb-6 text-2xl text-cyan-light'>“{data.slip.advice}”</p> */}
          <p className='mb-8 text-2xl text-cyan-light'>“{data.advice}”</p>
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
    </>
  )
}

export default Advice
