import { useRouter } from "next/router";
import React from "react";

const CoffeeStore = () => {
  const { query } = useRouter();
  // console.log(router);
  return <div>CoffeeStore Page : {query.id}</div>;
};

export default CoffeeStore;
