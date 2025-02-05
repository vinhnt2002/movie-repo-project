"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { useMovie } from "@/hooks/use-movie";
import React, { useState } from "react";

const NewPage = () => {
  const [searchTerm] = useState("");

  const debouncedValue = useDebounce(searchTerm, 500);

  // sử dụng đầu ra như thế này là dc
  const { listMovie } = useMovie(searchTerm, debouncedValue);

  console.log(listMovie);
  return <div>NewPage</div>;
};

export default NewPage;
