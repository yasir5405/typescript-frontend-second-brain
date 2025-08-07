import { useSelector } from "react-redux";

const DashboardHome = () => {
  const userData = useSelector((state: any) => state.auth.userData);
  return (
    <div className="h-full w-full">
      <h1 className="text-sm md:text-xl">
        Welcome to Dashboard, {userData?.name}
      </h1>
    </div>
  );
};

export default DashboardHome;
