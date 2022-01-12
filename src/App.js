import { useEffect, useState } from 'react'
import './App.css'
import Tic from './components/tic'

function App() {
  const dateBirth = new Date(2022, 8, 21, 0, 0, 0, 0)
  const nowDate = new Date()
  let d = Math.floor((dateBirth - nowDate) / (24 * 3600 * 1000))
  let h = Math.floor(
    (dateBirth - nowDate - 24 * 3600 * 1000 * d) / (3600 * 1000)
  )
  let m = Math.floor(
    (dateBirth - nowDate - (3600 * 1000 * 24 * d + 3600 * 1000 * h)) /
      (60 * 1000)
  )
  let s = Math.floor(
    (dateBirth -
      nowDate -
      (3600 * 1000 * 24 * d + 3600 * 1000 * h + 1000 * 60 * m)) /
      1000
  )

  const [state, setState] = useState({
    days: d,
    hours: h,
    minuts: m,
    seconds: s,
  })

  useEffect(() =>
    setTimeout(() => {
      setState({
        days: d,
        hours: h,
        minuts: m,
        seconds: s,
      })
    }, 1000)
  )
  return (
    <div className="App">
      <h1>COUTDOWN TO MY BIRTHDAY:</h1>
      <div>
        <Tic count={state.days} name="DAYS"></Tic>
        <Tic count={state.hours} name="HOURS"></Tic>
        <Tic count={state.minuts} name="MINETS"></Tic>
        <Tic count={state.seconds} name="SECONDS"></Tic>
      </div>
    </div>
  )
}

export default App
