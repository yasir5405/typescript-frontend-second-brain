import { Share2 } from "lucide-react";
import { AddContentModal, Button } from "../components";

const DashboardHome = () => {
  return (
    <div className="w-full h-full p-10">
      <nav className="py-2 w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Notes</h1>
    
        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            className="rounded-md"
            variant="secondary"
            text="Share Brain"
            startIcon={<Share2 />}
          />
          <AddContentModal />
        </div>
      </nav>
    </div>
  );
};

export default DashboardHome;
