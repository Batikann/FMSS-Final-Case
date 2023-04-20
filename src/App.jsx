import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StarsShipDetails from './pages/StarsShipDetails'
import Page404 from './pages/Page404'

function App() {
  return (
    <div className=" bg-home min-h-screen object-cover bg-cover text-white p-8 w-full flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ship/:name" element={<StarsShipDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
