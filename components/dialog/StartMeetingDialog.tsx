"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export default function StartMeetingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="space-x-2">
          <Plus />
          <p>Start Meeting</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start a new meeting</DialogTitle>
          <DialogDescription>
            Create a new meeting for urgent matter to discuss.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-2">
          <Label className="">Title</Label>
          <Input type="text" className="border-slate-500" placeholder="Title" />
          <Label>Description</Label>
          <Input
            type="text"
            className="border-slate-500"
            placeholder="Description of the meeting"
          />
        </form>
        <DialogFooter>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
