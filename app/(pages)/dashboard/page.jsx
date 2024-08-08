import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  if (session?.user?.plan === "free") {
    return <div className="">Max 10 projects</div>;
  }
  if (session?.user?.plan === "premium") {
    return <div className="">Max 20 projects</div>;
  }

  if (session?.user?.plan === "entreprise") {
    return <div>Unlimited projects</div>;
  }
};

export default Dashboard;
