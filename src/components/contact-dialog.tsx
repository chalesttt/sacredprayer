
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export function ContactDialog() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success notification
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond soon!",
    });
    
    // Reset form and close dialog
    setFormData({ name: "", email: "", message: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-white dark:text-gray-200 hover:text-gold transition-colors">
        Contact
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-deep-blue dark:text-gold">Contact Us</DialogTitle>
          <DialogDescription className="dark:text-gray-300">
            Send us a message to improve our Sacred Payers Website and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form
            action="https://formspree.io/f/mnnpnwvo" // <- Replace 'yourFormID' with your actual Formspree ID
            method="POST"
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="dark:text-gray-200">Name</Label>
              <Input
                id="name"
                name="name"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="dark:text-gray-200">Message</Label>
              <Textarea
                id="message"
                name="message"
                className="min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
      </DialogContent>
    </Dialog>
  );
}
