import { MenubarDemo } from "@/components/CollegeHomePage";
import SideBar from "@/components/sidebar";
import Dropdown from "@/components/ui/Dropdown";

function page() {
  return (
    <div>
      <div className="h-screen grid bg-gradient-to-r from-sky-600 to-indigo-600">
        <Dropdown />
      </div>
    </div>
  );
}

export default page;
