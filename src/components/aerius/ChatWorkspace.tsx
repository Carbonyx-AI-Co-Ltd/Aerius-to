import { ChatInputBar } from "./ChatInputBar";

export function ChatWorkspace() {
  return (
    <section className="chat-workspace" aria-label="Aerius chat workspace">
      <div className="empty-state">
        <h1>How can Aerius help?</h1>
        <p>Frontend Preview · No live backend connected</p>
      </div>

      <div className="prompt-chips" aria-label="Example prompts">
        <button type="button">Summarize a request</button>
        <button type="button">Draft a follow-up</button>
      </div>

      <ChatInputBar />
    </section>
  );
}
