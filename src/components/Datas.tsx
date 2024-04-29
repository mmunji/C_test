"use client";

import example from "@/api/example";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Datas() {
  const { data } = useQuery({ queryKey: ["datas"], queryFn: example });

  console.log(data);

  return <div>asdfasdfadsfsadfsadfasdf</div>;
}

export default Datas;
