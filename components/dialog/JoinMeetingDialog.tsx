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
import { Video } from "lucide-react";

export default function JoinMeetingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="space-x-2 border-slate-500">
          <Video />
          <p>Join Meeting</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join a meeting</DialogTitle>
          <DialogDescription>
            Join a meeting for urgent matter to discuss.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-2">
          <Label className="">Meet Id</Label>
          <Input
            type="text"
            className="border-slate-500"
            placeholder="ROOM-ID"
          />
        </form>
        <DialogFooter>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
