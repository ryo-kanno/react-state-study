import React, { useState } from "react"
import { Link } from "react-router-dom";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>UseState</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
      <br />
      <Link to='/'>戻る</Link>
    </div>
  )
}

export default UseState