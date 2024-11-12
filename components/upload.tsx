"use client";

import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "@/lib/image-upload";
const Upload = () => {
  const { toast } = useToast();

  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);

        if (res.length === 1) {
          toast({
            title: "Zdjęcie Dodane ✅️",
            description: `${res[0].name}`,
          });
        } else {
          toast({
            title: `${res.length} Zdjęcia Dodane✅️`,
            description: `Zdjęcia zostały dodane`,
          });
        }
      }}
      onUploadError={(error: Error) => {
        toast({
          variant: "destructive",
          title: "Błąd przy dodawaniu ❌",
          description: `${error}`,
        });
      }}
    />
  );
};

export default Upload;
