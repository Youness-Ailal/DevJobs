import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-[url('/background-bg.svg')] bg-cover py-8 pb-20 rounded-bl-[5rem]">
      <div className="max-w-screen-2xl mx-auto px-16 flex items-center justify-between">
        <Logo />
        <ThemeToggle size="lg" />
      </div>
    </header>
  );
}

export default Header;
