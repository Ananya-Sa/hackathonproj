import Sidebar from "@/components/shared/Sidebar";
import { redirect } from "next/navigation";
import { getUser } from "@/server/getUser";

async function page() {
  const { user } = await getUser();

  if (!user) {
    return redirect("/getting-started");
  }

  return (
    <div className="flex">
      <div className="">
        <Sidebar user={user} />
      </div>
    </div>
  );
}

export default page;
export const revalidate = 0;
