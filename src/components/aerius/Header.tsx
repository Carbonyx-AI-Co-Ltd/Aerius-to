import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <header className="top-header">
      <Link className="header-brand" href="/" aria-label="Aerius home">
        <BrandMark width={44} height={44} />
      </Link>

      <nav className="header-nav" aria-label="Primary navigation">
        <Link href="/">New Chat</Link>
        <a href="https://demo.aerius.to" rel="noreferrer" target="_blank">
          Demo
        </a>
        <a href="https://carbonyx.tech" rel="noreferrer" target="_blank">
          Technical Atlas
        </a>
        <a href="https://carbonyxai.com" rel="noreferrer" target="_blank">
          Company
        </a>
      </nav>
    </header>
  );
}
