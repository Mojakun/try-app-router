import { Container } from "@/components/Container";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
};
export default function Layout({ title, children }: PropsWithChildren<Props>) {
  return (
    <Container>
      <header>
        <h1>title</h1>
      </header>
      <main>{children}</main>
      <footer>© 2024 My Application</footer>
    </Container>
  );
}
