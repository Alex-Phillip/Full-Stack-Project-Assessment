import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { v4 as uuidv4 } from 'uuid'

export const AddVideo = ({ videoData, setVideoData }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const handleTitleFunction = (e) => {
    const newVidTitle = e.target.value
    setTitle(newVidTitle)
  }
  const handleURLFunction = (e) => {
    const newVidUrl = e.target.value
    setUrl(newVidUrl)
  }
  const addVideoFunction = () => {
    const vidUrl = url.includes('watch?v=')
      ? url.replace('watch?v=', 'embed/')
      : url

    const newVid = {
      id: uuidv4,
      title: title,
      url: vidUrl,
      rating: 3216,
    }

    if (
      newVid.title.length === 0 ||
      newVid.url.indexOf('https://www.youtube.com/') === -1
    ) {
      console.log({ Error: 'Please enter a title and valid URL' })
    } else {
      videoData.unshift(newVid)
      setVideoData([...videoData])
    }
  }

  return (
    <>
      <Input onChange={handleTitleFunction} placeholder="Enter title..." />
      <Input
        onChange={handleURLFunction}
        placeholder="Enter URL..."
        name="input"
      />
      <Button onClick={addVideoFunction}>Add Video</Button>
    </>
  )
}
