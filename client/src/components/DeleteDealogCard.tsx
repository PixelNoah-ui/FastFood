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
} from "./ui/alert-dialog";
import { Trash } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "./ui/button";
interface DeleteDialogProps {
  name: string;
  id: string;
}
export default function DeleteDealogCard({ name, id }: DeleteDialogProps) {
  const { removeItem } = useCartStore();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash
          size={20}
          className="hover:text-destructive cursor-pointer transition-colors duration-300"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to removes{" "}
            <span className="text-primary font-medium">&quot;{name}&quot;</span>{" "}
            product
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. this will remove your product from
            cart
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="space-x-3">
          <AlertDialogCancel className="rounded-none px-6">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              className="bg-destructive hover:bg-destructive rounded-none px-6 text-white"
              onClick={() => removeItem(id)}
            >
              Remove
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
