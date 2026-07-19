import { useState, useEffect } from 'react'

const apiURL = import.meta.env.VITE_API_URL;

function Home() {
  const [message, setMessage] = useState("")

  useEffect(() => {
  fetch(apiURL)
    .then(response => response.text())
    .then(data => setMessage(data))
  }, [])
  
  return (
    <>    
  <div>
    <h2>Home</h2>
    <p>{message}</p>
  </div>
    </>
  )
}

export default Home
