"use client";

import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SignInButton from "./sign-in-button";

export default function SignIn() {
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
          title: "Błąd logowania",
          description: "Nieprawidłowa nazwa użytkownika lub hasło.",
          variant: "destructive",
        });
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Błąd logowania:", err);
      toast({
        title: "Wystąpił błąd",
        description: "Nie udało się zalogować. Proszę spróbować ponownie później.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Card className="w-full max-w-md mx-auto shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Logowanie</CardTitle>
          <CardDescription className="text-sm">Wprowadź swoje dane, aby uzyskać dostęp do swojego konta</CardDescription>
        </CardHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleSubmit(formData);
          }}
        >
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Nazwa użytkownika</Label>
              <Input id="username" name="username" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <SignInButton loading={loading} />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
