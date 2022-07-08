import React, { useEffect, useState } from "react";
import { services } from "../service";

export default function Profile() {
  const [data, setData] = useState();
  useEffect(() => {
    services
      .Profile()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  let style = { borderRadius: "10px" };
  return (
    <div>
      <img src={data?.picture} alt="profilePic" style={style.borderRadius} />
    </div>
  );
}
