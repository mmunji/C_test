"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

import example from "@/api/example";

function ExampleData() {
  const { data } = useQuery({ queryKey: ["example"], queryFn: example });

  console.log(data);

  return <div>{data?.data.title}</div>;
}

export default ExampleData;
