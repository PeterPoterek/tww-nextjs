import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";

import Upload from "@/components/upload";
import SignOut from "@/components/sign-out";

interface UserCardProps {
  username: string;
  avatarUrl?: string;
}

const UserCard: FC<UserCardProps> = ({ username, avatarUrl }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>
            <User className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-2xl">{username}</CardTitle>
          <CardDescription>Aktualny Użytkownik</CardDescription>
        </div>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status:</span>
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Aktywny
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Ostatnie logowanie:</span>
          <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 pt-6">
        <Upload />
        <SignOut />
      </CardFooter>
    </Card>
  );
};

export default UserCard;
