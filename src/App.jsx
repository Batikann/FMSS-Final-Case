import Header from './components/Header'
import ShowCase from './components/ShowCase'

function App() {
  return (
    <div className="bg-[url('https://img.wallpapic.com/i1862-037-811/medium/uzay-mor-mavi-astronomi-duvar-kagidi.jpg')] min-h-screen object-cover bg-cover text-white p-4 w-full flex flex-col items-center">
      <Header />
      <ShowCase />
    </div>
  )
}

export default App
