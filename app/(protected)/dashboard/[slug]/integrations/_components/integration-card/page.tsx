import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  return <div className="border-2 border-[#33"></div>
};

export default IntegrationCard;
