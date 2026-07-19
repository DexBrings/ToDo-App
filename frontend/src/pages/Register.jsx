import { useState, useEffect } from 'react'

const apiURL = import.meta.env.VITE_API_URL;

function Register() {
  const [message, setMessage] = useState("")

  useEffect(() => {
  fetch(apiURL)
    .then(response => response.text())
    .then(data => setMessage(data))
  }, [])
  
  return (
    <>    
  <div>
    <h2>Registrierung</h2>
    <p>{message}</p>
  </div>
    </>
  )
}

export default Register