"use client";

import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "@/lib/image-upload";
import { twMerge } from "tailwind-merge";
import { Upload as UploadIcon } from "lucide-react";

const Upload = () => {
  const { toast } = useToast();

  return (
    <UploadButton
      content={{
        button({ ready }) {
          if (ready)
            return (
              <div className="flex items-center gap-2">
                <span>Dodaj Zdjęcie</span>
                <UploadIcon size={16} />
              </div>
            );
          return "Przygotowuję...";
        },
        allowedContent({ ready, fileTypes, isUploading }) {
          if (!ready) return "Sprawdzanie dozwolonych formatów";
          if (isUploading) return "Wgrywam pliki...";
          return `Dozwolone formaty: ${fileTypes.join(", ")}`;
        },
      }}
      config={{ cn: twMerge }}
      appearance={{
        button: `
          inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none ring-offset-background
          border border-input
          bg-background hover:text-accent-foreground
          hover:bg-accent
          h-9 py-2 px-4
          ut-ready:bg-transparent ut-ready:text-primary
          ut-uploading:cursor-not-allowed ut-uploading:text-muted-foreground ut-uploading:bg-muted
          ut-finished:bg-green-500 ut-finished:text-white cursor-pointer
        `,
        container: "w-max",
        allowedContent: "hidden",
      }}
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
        window.location.reload();
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
