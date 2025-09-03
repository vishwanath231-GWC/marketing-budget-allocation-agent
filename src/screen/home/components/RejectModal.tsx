import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import reject from "@/assets/images/decline.png";

const RejectModal = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="bg-[#ee404c] cursor-pointer">
                <img src={reject} alt="Reject" className="w-6" />
                Reject
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reason for rejection</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="">
            <div>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">Submit</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  );
};

export default RejectModal;
