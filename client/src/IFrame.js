export const IFrame = ({ selectedVideoUrl, title }) => {
  let vidUrl = selectedVideoUrl.includes('watch?v=')
    ? selectedVideoUrl.replace('watch?v=', 'embed/')
    : selectedVideoUrl
  vidUrl = vidUrl + '?enablejsapi=1'

  return (
    <iframe
      src={vidUrl}
      title={title}
      width={'90%'}
      height={'500rem'}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
