import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default Page;
