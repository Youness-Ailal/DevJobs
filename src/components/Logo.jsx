import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link
      to="/"
      className="text-white font-semibold text-4xl flex items-center gap-2">
      devjobs
    </Link>
  );
}

export default Logo;
