import Advice from './components/Advice'

function App() {
  return (
    <div className='App bg-gray-blue-dark min-h-screen p-4 text-center flex flex-col items-center justify-center'>
      <div className='card relative bg-gray-blue-medium rounded-lg max-w-[444px] mt-4  p-8 font-extrabold min-h-[150px]'>
        <Advice />
      </div>
    </div>
  )
}

export default App
