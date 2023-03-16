import { useState } from 'react'
import { AddVideo } from './AddVideo'
import { Button } from './Button'

export const VideoCard = ({ vid, videoData, setVideoData }) => {
  const vidUrl = vid.url.includes('watch?v=')
    ? vid.url.replace('watch?v=', 'embed/')
    : vid.url

  const [count, setCount] = useState(vid.rating)
  const upVoteFunction = () => {
    setCount(count + 1)
  }
  const downVoteFunction = () => {
    setCount(count - 1)
  }
  const deleteFunction = (id) => {
    const filteredVideos = videoData.filter((vid) => {
      if (vid.id === id) {
        const deletedDateTime =
          vid.title + ' deleted at ' + new Date().toLocaleString()
        console.log(deletedDateTime)
      }
      return vid.id !== id
    })
    setVideoData(filteredVideos)
  }

  return (
    <article className="videoCard" id={vid.id}>
      <p>{vid.title}</p>
      <iframe
        //   width="560"
        //   height="315"
        src={vidUrl}
        title={vid.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Votes: {count}</p>
      <Button onClick={upVoteFunction}>Up Vote</Button>
      <Button onClick={downVoteFunction}>Down Vote</Button>
      <Button onClick={() => deleteFunction(vid.id)}>Delete</Button>
    </article>
  )
}
