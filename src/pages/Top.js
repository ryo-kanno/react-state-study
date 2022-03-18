import React from "react";
import { Link } from "react-router-dom"
// import { useRecoilValue } from "recoil";
// import { recoilCountState } from "../atom/store";

const Top = () => {
  // const recoilCount = useRecoilValue(recoilCountState)
  return (
    <div>
      <h1>React勉強会 とっぷぺーじ</h1>
      <ul>
        <li><Link to='/usestate'>useStateについて</Link></li>
        <li><Link to='/recoil'>Recoilについて</Link></li>
        <li><Link to='/persist'>永続化について</Link></li>
      </ul>
      {/* <p>count: {recoilCount}</p> */}
    </div>
  )
}

export default Top