import { signOut } from "@/app/auth";
import { Button } from "./ui/button";

const SignOut = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default SignOut;
