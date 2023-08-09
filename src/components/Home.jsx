import React, { useEffect, useRef } from "react";
import Vid from "../assets/vid.mp4";

const Home = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div>
      <video src={Vid} ref={vidRef} muted autoPlay loop />
    </div>
  );
};

export default Home;
