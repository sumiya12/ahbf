import React, { useEffect, useState } from "react";
import { services } from "../service";

export default function Description() {
  const [data, setData] = useState();
  useEffect(() => {
    services
      .Description()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return <div>{data?.description}</div>;
}
