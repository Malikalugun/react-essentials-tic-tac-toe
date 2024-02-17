import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <div id="game-container">
<ol id="players">
<li>
  <span className="player-name">Player 1</span>
  <span className='player-symbol'>X</span>
</li>
<li>
  <span className="player-name">Player 2</span>
  <span className='player-symbol'>O</span>
</li>
</ol>
    </div>
   </main>
  )
}

export default App
