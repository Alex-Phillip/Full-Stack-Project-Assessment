import videoData from './exampleresponse.json'

export const VideoCard = () => {
  return videoData.map((vid) => {
    return (
      <article>
        <p>{vid.title}</p>
        <iframe
          //   width="560"
          //   height="315"
          src={vid.url.replace('watch?v=', 'embed/')}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h3>{vid.rating}</h3>
        <button>Delete</button>
      </article>
    )
  })
  //   return (
  //     <article className="videoCard">
  //       <h1>Video Title</h1>
  //       <iframe
  //         // width="560"
  //         // height="315"
  //         src="https://www.youtube.com/embed/{VIDEO_ID_GOES_HERE}"
  //         title="YouTube video player"
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       ></iframe>
  //       <h3>Votes</h3>
  //       <button>Delete</button>
  //     </article>
  //   )
}
