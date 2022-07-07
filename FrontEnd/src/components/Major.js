import React, { useEffect, useState } from "react";
import { services } from "../service";

export default function Major() {
  const [data, setData] = useState();
  useEffect(() => {
    services
      .Major()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return <div>{data?.major}</div>;
}
