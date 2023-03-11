import { VideoCard } from './VideoCard'
import videoData from './exampleresponse.json'

export const VideoList = () => {
  return (
    <section className="videoList">
      {videoData.map((vid) => {
        return <VideoCard data={vid} key={vid.id} />
      })}
    </section>
  )
}
