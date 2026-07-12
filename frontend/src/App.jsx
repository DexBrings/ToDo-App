import { useState, useEffect } from 'react'
import './App.css'

const apiURL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
	fetch(apiURL)
		.then(response => response.text())
		.then(data => setMessage(data))
  }, [])
  
  return (
    <>    
	<div>
		<h1>React TODO-App</h1>
		<p>{message}</p>
	</div>
    </>
  )
}

export default App
