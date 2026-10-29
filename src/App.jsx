import { useRef, useState } from 'react'
import './App.css'
import Timer from './Timer'
import RecipeDetails from './RecipeDetails';

function App() {
  const numRef = useRef();
  const [show, setShow] = useState(true);
  const [v, setV] = useState(10);

  const changeTimer = () => {
    console.log(+numRef.current.value);
    setV(+numRef.current.value);
  };

  return (
    <>
      {/* <input type="number" ref={numRef} />
      <button onClick={changeTimer}>change Timer</button>
      <hr />
      <button onClick={() => setShow(show => !show)}>toggle</button>
      {show && <Timer val={v} />} */}
      {/* <Timer val={10} />
      <Timer val={10} />
      <Timer val={10} /> */}

      <RecipeDetails id={1} />
    </>
  )
}

export default App
