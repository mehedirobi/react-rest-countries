import './App.css'
import { Suspense } from 'react'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<h3>Countires are loading...</h3>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  )
}

export default App
