import React from "react"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { recoilCountState } from "../atom/store"

const Recoil = () => {
  const [count, setRecoilCount] = useRecoilState(recoilCountState)

  return (
    <div>
      <h1>Recoil</h1>
      <p>count: {count}</p>
      <button onClick={() => setRecoilCount(count + 1)}>
        Click
      </button>
      <br />
      <Link to='/'>戻る</Link>
    </div>
  );
}

export default Recoil