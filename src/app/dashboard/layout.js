import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import { handler as nextAuthHandler } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(nextAuthHandler);

  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-black">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar user={session.user} />
        <main className="p-4 md:p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
