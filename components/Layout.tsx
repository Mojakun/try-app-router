import { Container } from "@/components/Container";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
};
export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-16 bg-blue-500 text-white flex items-center justify-center">
        <h1>{title}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}
