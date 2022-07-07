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

  //   console.log(data && data);
  return (
    <div>
      <img src={data?.picture} alt="asas" />
    </div>
  );
}
