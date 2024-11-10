"use client";

import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

const SignIn = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: formData.get("username"),
        password: formData.get("password"),
      });

      if (result?.error) {
        toast({
          title: "Sign-In Failed",
          description: "Invalid username or password.",
          variant: "destructive",
        });
      } else {
        router.push("/dashboard");
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
      <Button type="submit" className="self-start" disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
};

export default SignIn;
