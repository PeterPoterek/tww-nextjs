import { auth } from "../auth";
import SignOut from "@/components/sign-out";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-3xl gap-5 ">
        Current user: <p className="font-bold">{session?.user?.name}</p>
        <SignOut />
      </div>
    </div>
  );
};

export default page;
