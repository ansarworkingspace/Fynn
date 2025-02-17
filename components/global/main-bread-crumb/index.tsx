import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && <div className="flex justify-center w-full">
        <div className="radial--gradient w-4/12 py-5 lg:py-10 flex flex-col items-center">
        
        
        </div>
        </div>}
    </div>
  );
};

export default MainBreadCrumb;
