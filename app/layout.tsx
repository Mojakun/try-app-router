import { ReactElement } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "My App",
  description: "This is a simple Next.js app",
  icons: {
    icon: "/favicon.ico", // `public/favicon.ico`を参照
  },
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
