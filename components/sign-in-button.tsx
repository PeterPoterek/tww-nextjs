import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

interface SignInButtonProps {
  loading: boolean;
}
const SignInButton = ({ loading }: SignInButtonProps) => {
  return (
    <Button variant={"outline"} type="submit" className="w-64 self-center" disabled={loading}>
      {loading ? (
        "Trwa logowanie..."
      ) : (
        <div className="flex justify-center items-center gap-1">
          <span>Zaloguj się</span>
          <LogIn size={16} />
        </div>
      )}
    </Button>
  );
};

export default SignInButton;
