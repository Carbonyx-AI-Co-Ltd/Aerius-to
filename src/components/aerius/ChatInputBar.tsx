export function ChatInputBar() {
  return (
    <form className="chat-input-shell" aria-label="Preview chat input">
      <label className="sr-only" htmlFor="preview-input">
        Ask Aerius
      </label>
      <input
        id="preview-input"
        placeholder="Message Aerius..."
        type="text"
      />
      <button disabled type="button">
        Send
      </button>
      <p>Messages are local only in this preview.</p>
    </form>
  );
}
