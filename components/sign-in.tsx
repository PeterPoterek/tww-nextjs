import { signIn } from "@/app/auth";
import prisma from "@/lib/db";
import { verifyPassword, hashPassword } from "@/lib/utils";

const SignIn = () => {
  return (
    <form
      action={async (formData) => {
        "use server";

        await signIn("credentials", formData);
      }}
      className="flex flex-col gap-5"
    >
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button className="self-start">Sign In</button>
    </form>
  );
};

export default SignIn;
