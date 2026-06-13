import { ChatWorkspace } from "./ChatWorkspace";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function AppShell() {
  return (
    <main className="page-shell">
      <Header />
      <ChatWorkspace />
      <Footer />
    </main>
  );
}
