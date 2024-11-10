import SignIn from "@/components/sign-in";
import { auth, signOut } from "./auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {!session ? (
        <SignIn />
      ) : (
        <div className="flex flex-col justify-center items-center max-w-3xl gap-5 ">
          Current user: <p className="font-bold">{session.user?.name}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      )}
    </>
  );
}
