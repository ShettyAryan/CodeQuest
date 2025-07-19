import Generate from "@/sections/Generate";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) {
    return redirect("/signin");
  }

  return <Generate />;
};

export default page;
