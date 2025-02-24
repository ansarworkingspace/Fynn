import AutomationBreadCrumb from "@/components/global/bread-crumb/automations";
import React from "react";

type Props = {
  params:{id:string}
};

const Page = ({params}: Props) => {
  return <div className="flex flex-col items-center gap-x-20">

<AutomationBreadCrumb id={params.id}/>


  </div>;
};

export default Page;
