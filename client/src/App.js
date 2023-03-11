import './App.css'
import videoData from './exampleresponse.json'
import { VideoList } from './VideoList'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <VideoList />
    </div>
  )
}

export default App
