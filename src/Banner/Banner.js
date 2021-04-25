import React, { useState } from "react";
import  './Banner.css'
import Cards from '../Cards/Cards'
import Gallery from '../Gallery/Gallery'

export default function Banner() {
  const [isWide, setIsWide] = useState(false);
  const toggleAnimation = () => {
    setIsWide(prev => !prev);
  }

  const [show, setShow] = useState(false);

  return (
    <div className="wrapper">
      <div className="logoWrapper"/>
      <div className={isWide ? "banner-text home-card wide" : "banner-text home-card"}>
        {show ? null : <h1 className="header">Welcome to OneRagtime</h1>}
        {show ? null : <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>}
        {show ? null : <button 
          className="animation-btn" 
          onClick={() => {
            toggleAnimation()
            setShow(!show)
          }}
        >
        See the animation
        </button>}
        <div className="container card-gallery">
          {show ? <Cards/> : null}
          {show ? <Gallery/> : null}
        </div>
      </div>
    </div>
  )
}
