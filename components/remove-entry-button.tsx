"use client";

import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

import { FC } from "react";

interface RemoveEntryButtonProps {
  id: string;
  fileName: string;
  removeEntry: (id: string) => Promise<void>;
}

const RemoveEntryButton: FC<RemoveEntryButtonProps> = ({ id, fileName, removeEntry }) => {
  const handleRemove = async () => {
    await removeEntry(id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>
          <Trash2 size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Jesteś Pewien?</AlertDialogTitle>
          <AlertDialogDescription>
            Czy napewno chcesz usunąć <span className="font-bold">{fileName}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Anuluj</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemove}>Potwierdź</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveEntryButton;
