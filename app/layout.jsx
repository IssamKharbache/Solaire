import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header/NavBar";
import AuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solaire",
  description: "Solaire",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <NavBar />
          <div className="bg-slate-200 min-h-[calc(100vh-80px)]">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
