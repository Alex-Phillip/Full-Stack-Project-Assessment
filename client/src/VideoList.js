import { VideoCard } from './VideoCard'

export const VideoList = ({ videoData, setVideoData, largePlayerFunction }) => {
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
            largePlayerFunction={largePlayerFunction}
          />
        ))}
    </section>
  )
}
