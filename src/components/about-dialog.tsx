
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-white dark:text-gray-200 hover:text-gold transition-colors">About</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:bg-gray-800 dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-deep-blue dark:text-gold">About Sacred Prayers</DialogTitle>
          <DialogDescription className="dark:text-gray-300">
            Learn about our mission and purpose
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <p className="text-gray-700 dark:text-gray-300">
            Sacred Prayers is a collection of Catholic prayers offered in multiple languages to make prayer more accessible to believers worldwide.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our mission is to preserve these sacred prayers and help people pray in English, Latin, and Tagalog with proper pronunciation.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Whether you're learning to pray in a new language or deepening your spiritual practice, these translations will assist you in your journey of faith.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
