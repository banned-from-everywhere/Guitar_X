import Link from "next/link";
import {
  Home,
  Music,
  Video,
  PlayCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const Header = () => (
  <>
    <header className="header">
      <h1 className="logo">GuitarX🎸</h1>
      <nav className="nav">
        <Link href="/">
          <span>
            <Home size={18} /> Home
          </span>
        </Link>
        <Link href="/chords">
          <span>
            <Music size={18} /> Chords
          </span>
        </Link>
        <Link href="/videos">
          <span>
            <Video size={18} /> Videos
          </span>
        </Link>
        <Link href="/practice">
          <span>
            <PlayCircle size={18} /> Practice
          </span>
        </Link>
        <Link href="/tips">
          <span>
            <Lightbulb size={18} /> Tips
          </span>
        </Link>
        <Link href="/progress">
          <span>
            <BarChart3 size={18} /> Progress
          </span>
        </Link>
      </nav>
    </header>
  </>
);

export default Header;
