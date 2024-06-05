import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/core/providers/SessionProvider";
import { Auth } from "@/views/layouts";

export const metadata = {
  title: "Template",
  description: "",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <Auth session={session} />
      <SessionProvider session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
