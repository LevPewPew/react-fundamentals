// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = event.target.elements.hobby.value
    onSubmitUsername(value)
  };

  const hobbyValidator = (event) => {
    const isValid = event.target.value === event.target.value.toLowerCase()
    if (!isValid) {
      setError('sorry, lower case only')
    } else {
      setError(null)
    }
  }

  return (
    <>
      {error && <p role="alert">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="hobby">Hobby, lowercase only:</label>
          <input id="hobby" type="text" onChange={hobbyValidator}/>
        </div>
        <button type="submit" disabled={error}>Submit</button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
