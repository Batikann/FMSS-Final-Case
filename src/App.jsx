import Header from './components/Header'
import ShowCase from './components/ShowCase'

function App() {
  return (
    <div className=" bg-home min-h-screen object-cover bg-cover text-white p-8 w-full flex flex-col items-center">
      <Header />
      <ShowCase />
    </div>
  )
}

export default App
