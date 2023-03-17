import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './Header'
import { VideoList } from './VideoList'
import { VideoCard } from './VideoCard'
import { Footer } from './Footer'
import { AddVideo } from './AddVideo'

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

  const [selectedVideoUrl, setSelectedVideoUrl] = useState('')

  const largePlayerFunction = (id) => {
    const selectedVideo = videoData.filter((vid) => {
      return vid.id === id
    })
    setSelectedVideoUrl(selectedVideo.map((vid) => vid.url).flat())
  }

  return (
    <div className="App">
      <Header />
      <AddVideo videoData={videoData} setVideoData={setVideoData} />
      <VideoList
        videoData={videoData}
        setVideoData={setVideoData}
        largePlayerFunction={largePlayerFunction}
      />
      <Footer />
    </div>
  )
}

export default App
