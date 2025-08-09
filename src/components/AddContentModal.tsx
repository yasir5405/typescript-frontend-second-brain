import { Plus } from "lucide-react";
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
import Button from "./ui/Button";

const AddContentModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="rounded-md z-10"
          variant="primary"
          text="Add Content"
          size="sm"
          startIcon={<Plus />}
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-neutral-800 text-white border-none">
        <AlertDialogHeader>
          <AlertDialogTitle>Add content</AlertDialogTitle>
          <AlertDialogDescription>
            Add any type of content you want.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form>
          <input type="" placeholder="Type" />
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Upload Content</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddContentModal;
