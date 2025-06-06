import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import {
  PreFetchUserAutomations,
  PrefetchUserProfile,
} from "@/app/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  const query = new QueryClient();

  await PrefetchUserProfile(query);
  await PreFetchUserAutomations(query);

  return (
    <div className="p-3">
      <Sidebar slug={params.slug} />
      <div
        className="lg:ml-[250px]
    lg:pl-10
    lg:py-5
    flex
    flex-col
    overflow-auto
    "
      >
        <Navbar slug={params.slug} />

        {children}
      </div>
    </div>
  );
};

export default Layout;
