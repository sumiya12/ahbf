import React, { useEffect, useState } from "react";
import { services } from "../service";

export default function Age() {
  const [data, setData] = useState();
  useEffect(() => {
    services
      .Age()
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return <div>{data?.age}</div>;
}
