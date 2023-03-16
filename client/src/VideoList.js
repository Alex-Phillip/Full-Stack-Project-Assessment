import { VideoCard } from './VideoCard'

export const VideoList = ({ videoData, setVideoData }) => {
  return (
    <section className="videoList">
      {videoData
        .sort((a, b) => b.rating - a.rating)
        .map((vid) => (
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
