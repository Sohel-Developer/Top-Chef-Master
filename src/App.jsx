
import { Alert } from 'flowbite-react'
import './App.css'

function App() {


  return (
    <>
      <Alert color="info">
        <span>
          <span className="font-medium">
            Info alert!
          </span>
          {' '}Change a few things up and try submitting again.
        </span>
      </Alert>
    </>
  )
}

export default App
