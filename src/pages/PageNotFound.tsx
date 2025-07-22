import { Ghost } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="w-full min-h-[90dvh] flex items-center justify-center flex-col">
      <Ghost size={80}/>
      <h1 className="text-3xl font-bold">
        Oops! The page you are looking for doesn't exist.
      </h1>
    </div>
  );
};

export default PageNotFound;
