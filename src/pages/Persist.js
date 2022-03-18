import React from "react"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { persistCountState } from "../atom/store"

const Persist = () => {
  const [count, setPersistCount] = useRecoilState(persistCountState)

  return (
    <div>
      <h1>永続化</h1>
      <p>count: {count}</p>
      <button onClick={() => setPersistCount(count + 1)}>
        Click
      </button>
      <br />
      <button onClick={() => setPersistCount(0)}>
        Reset
      </button>
      <br />
      <Link to='/'>戻る</Link>
    </div>
  );
}

export default Persist