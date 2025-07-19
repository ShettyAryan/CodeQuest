import React from "react";
import History from "@/sections/History";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) {
    return redirect("/signin");
  }
  return <History />;
};

export default page;
