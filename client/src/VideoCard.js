// import videoData from './exampleresponse.json'
import { useState } from 'react'
import { Button } from './Button'

const deleteFunction = () => {}
const downVoteFunction = () => {}

export const VideoCard = ({ vid }) => {
  const [count, setCount] = useState(vid.rating)
  const upVoteFunction = () => {
    setCount(count + 1)
  }
  const downVoteFunction = () => {
    setCount(count - 1)
  }

  return (
    <article className="videoCard">
      <p>{vid.title}</p>
      <iframe
        //   width="560"
        //   height="315"
        src={vid.url.replace('watch?v=', 'embed/')}
        title={vid.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Votes: {count}</p>
      <Button onClick={upVoteFunction}>Up Vote</Button>
      <Button onClick={downVoteFunction}>Down Vote</Button>
      <Button onClick={deleteFunction}>Delete</Button>
    </article>
  )
}
