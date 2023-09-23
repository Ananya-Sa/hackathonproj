import Sidebar from "@/components/shared/Sidebar";
import { redirect } from "next/navigation";
import { getUser } from "@/server/getUser";
import Navbar from "@/components/shared/Navbar";

async function page() {
  const { user } = await getUser();

  if (!user) {
    return redirect("/getting-started");
  }

  return (
    <div className="flex">
      <div>
        <Sidebar user={user} />
      </div>
      <Navbar />
    </div>
  );
}

export default page;
export const revalidate = 0;
