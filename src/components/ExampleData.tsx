"use client";

import example from "@/api/example";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function ExampleData() {
  const { data } = useQuery({ queryKey: ["example"], queryFn: example });

  console.log(data);

  return <div>asdfasdfadsfsadfsadfasdf</div>;
}

export default ExampleData;
