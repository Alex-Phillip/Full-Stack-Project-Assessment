import videoData from './exampleresponse.json'

export const VideoCard = () => {
  return videoData.map((vid) => {
    return (
      <article className="videoCard">
        <p>{vid.title}</p>
        <iframe
          //   width="560"
          //   height="315"
          key={vid.id}
          src={vid.url.replace('watch?v=', 'embed/')}
          title={vid.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>Votes: {vid.rating}</p>
        <button>Delete</button>
      </article>
    )
  })
}
