"use client";

import { signIn } from "next-auth/react"; // Use client version of signIn
import { useToast } from "@/hooks/use-toast"; // Import shadcn's useToast hook
import { useRouter } from "next/navigation"; // Import Next.js router for redirect
import { useState } from "react";

const SignIn = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false, // Prevent automatic redirection
        username: formData.get("username"),
        password: formData.get("password"),
      });

      if (result?.ok) {
        // Redirect to dashboard if sign-in is successful
        router.push("/dashboard");
      } else {
        // Trigger toast if sign-in fails
        toast({
          title: "Sign-In Failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Error during sign-in:", err);
      toast({
        title: "An error occurred",
        description: "Unable to sign in. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit(formData);
      }}
      className="flex flex-col gap-5"
    >
      <label>
        Username
        <input name="username" type="text" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button type="submit" className="self-start" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};

export default SignIn;
