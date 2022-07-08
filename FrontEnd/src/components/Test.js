import React, { useEffect, useState } from "react";
import "./test.css";
import { services } from "../service";

export default function Test() {
  const [data, setData] = useState();
  useEffect(() => {
    services
      .Name()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const fb = () => {
    window.location.href = "https://www.facebook.com/Sumiya03/";
  };
  const git = () => {
    window.location.href = "https://github.com/sumiya12";
  };
  return (
    <div class="container">
      <div class="card card1">
        <div class="border">
          <h2>{data?.name}</h2>
          <div class="icons">
            <i class="fa fa-facebook" aria-hidden="true" onClick={fb}></i>
            <i class="fa fa-github" aria-hidden="true" onClick={git}></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-dribbble" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
