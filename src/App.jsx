
// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Footer from './component/Footer'

const allPaths = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    )
  },
  {
    path: "/product/:id",
    element: (
      <>
        <Navbar />
        <Hero/>
        <ProductDetail />
        <Footer />
      </>
    )
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  },
])

async function hell() {
  const hy = await fetch('https://fakestoreapi.com/products')
  const ho = await hy.json()

  console.log(ho)

}
hell()
function App() {
  // const [count, setCount] = useState()

  return (
    <>
      <RouterProvider router={allPaths} />
    </>
  )
}

export default App
