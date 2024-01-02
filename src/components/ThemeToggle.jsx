import { Switch } from "@/components/ui/switch";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkTheme } from "../context/DarkThemeProvider";
import { useEffect } from "react";

function ThemeToggle() {
  const { toggleTheme, isDark } = useDarkTheme();
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    if (!isDark) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <div className="flex items-center gap-2">
      <HiSun className="text-white text-2xl" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <HiMoon className="text-white text-2xl" />
    </div>
  );
}

export default ThemeToggle;
