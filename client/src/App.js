import { useEffect } from 'react'
import './App.css'
import { Header } from './Header'
import { VideoList } from './VideoList'
import { Footer } from './Footer'

const App = () => {
  const getVideos = async () => {
    // fetch('https://localhost:5000')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    const response = await fetch('http://localhost:5000')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className="App">
      <Header />
      <VideoList />
      <Footer />
    </div>
  )
}

export default App
