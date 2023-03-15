import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './Header'
import { VideoList } from './VideoList'
import { Footer } from './Footer'

const App = () => {
  const [videoData, setVideoData] = useState([])

  const getVideos = async () => {
    const response = await fetch('http://localhost:5000')
    const data = await response.json()
    setVideoData(data)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div className="App">
      <Header />
      <VideoList videoData={videoData} />
      <Footer />
    </div>
  )
}

export default App
