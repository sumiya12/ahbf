import React, { useEffect, useState } from "react";
import { services } from "../service";

export default function Name() {
  const [data, setData] = useState();
  useEffect(() => {
    services
      .Name()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return <div>{data?.name}</div>;
}
