import './App.css'
import Gallery from './components/Gallery'

function App() {

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-400 via-gray-300 to-gray-400">
      <h1 className="text-5xl font-bold text-center py-5 bg-clip-text text-transparent bg-linear-to-r from-black via-black/80 to-black/50">
        Photo Gallery
      </h1>
      <Gallery/>
    </div>
  )
}

export default App
