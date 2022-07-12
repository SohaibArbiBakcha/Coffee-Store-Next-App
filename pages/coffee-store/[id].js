import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const CoffeeStore = () => {
  const { query } = useRouter();
  // console.log(router);
  return (
    <div>
      CoffeeStore Page : {query.id} <br /> <Link href="/">Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
