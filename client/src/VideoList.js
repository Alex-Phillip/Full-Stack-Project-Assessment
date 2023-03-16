import { VideoCard } from './VideoCard'

export const VideoList = ({ videoData, setVideoData }) => {
  return (
    <section className="videoList">
      {videoData.map((vid) => (
        <VideoCard
          vid={vid}
          key={vid.id}
          videoData={videoData}
          setVideoData={setVideoData}
        />
      ))}
    </section>
  )
}
