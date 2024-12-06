import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="w-full h-[80px] inset-y-0 fixed z-50 md:pl-56">
        <Navbar />
      </div>
      <div className="hidden md:flex fixed inset-y-0 h-full flex-col z-50 w-56 ">
        <Sidebar />
      </div>
      {/* <main className="h-full flex items-center justify-center"> */}
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
