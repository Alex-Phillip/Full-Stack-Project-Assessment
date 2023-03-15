import { VideoCard } from './VideoCard'
// import videoData from './exampleresponse.json'

export const VideoList = ({ videoData }) => {
  console.log(videoData)

  return (
    <section className="videoList">
      {videoData.map((vid) => (
        <VideoCard vid={vid} key={vid.id} />
      ))}
    </section>
  )
}
