import { auth } from "../auth";
import SignOut from "@/components/sign-out";
import { redirect } from "next/navigation";
import Upload from "@/components/upload";

const page = async () => {
  const session = await auth();

  console.log(session);

  if (!session) redirect("/login");

  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-3xl gap-5 ">
        <div>
          Current user: <p className="font-bold">{session?.user?.name}</p>
          <SignOut />
        </div>

        <div>
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default page;
