import React, { useEffect, useState } from "react";
import { services } from "../service";
import "bootstrap/dist/css/bootstrap.min.css";
// import mp3s from "./audio/c.mp3";

export default function Footer() {
  const [mp3, setMp3] = useState();
  useEffect(() => {
    services
      .mp3()
      .then((res) => res.json())
      .then((res) => setMp3(res));
  }, []);
  return (
    <audio controls src={mp3} type="audio/ogg">
      Your browser does not support the audio tag.
      <code>audio</code>
    </audio>
  );
}
