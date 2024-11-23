import { signOut } from "@/app/auth";
import SignOutButton from "./sign-out-button";

const SignOut = () => {
  return (
    <div>
      <form
        id="signOutForm"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <SignOutButton />
      </form>
    </div>
  );
};

export default SignOut;
