"use client";

import { Button } from "./ui/button";
import { FC } from "react";

interface RemoveEntryButtonProps {
  id: string;
  removeEntry: (id: string) => Promise<void>;
}

const RemoveEntryButton: FC<RemoveEntryButtonProps> = ({ id, removeEntry }) => {
  const handleRemove = async () => {
    await removeEntry(id);
  };

  return (
    <Button variant={"destructive"} onClick={handleRemove}>
      X
    </Button>
  );
};

export default RemoveEntryButton;
