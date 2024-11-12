import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Upload from "@/components/upload";
import SignOut from "@/components/sign-out";

interface UserCardProps {
  username: string;
}

const UserCard: FC<UserCardProps> = ({ username }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktualny Użytkownik</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-5">
        <Upload />
        <SignOut />
      </CardContent>
    </Card>
  );
};

export default UserCard;
