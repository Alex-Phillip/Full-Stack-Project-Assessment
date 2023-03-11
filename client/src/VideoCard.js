// import videoData from './exampleresponse.json'
import { Button } from './Button'

const deleteFunction = () => {}

export const VideoCard = ({ data }) => {
  return (
    <article className="videoCard">
      <p>{data.title}</p>
      <iframe
        //   width="560"
        //   height="315"
        src={data.url.replace('watch?v=', 'embed/')}
        title={data.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Votes: {data.rating}</p>
      <Button onClick={deleteFunction}>Delete</Button>
    </article>
  )
}
