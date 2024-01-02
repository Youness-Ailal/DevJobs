import { Link } from "react-router-dom";

const defaultStyles = "hover:bg- px-8 py-3 rounded-md text-md font-semibold ";

function Button({ children, variation = "default", ...props }) {
  if (variation === "secondary")
    return (
      <a
        target="_blank"
        {...props}
        className={`bg-indigo-100 text-indigo-500 hover:bg-indigo-50 dark:bg-slate-900 dark:text-indigo-50 dark:hover:bg-slate-800  ${defaultStyles}`}>
        {children}{" "}
      </a>
    );
  if (variation === "link")
    return (
      <a
        target="_blank"
        {...props}
        className={`dark:text-slate-300 text-slate-600 dark:hover:text-slate-200 hover:text-slate-950 text-md underline underline-offset-4`}>
        {children}{" "}
      </a>
    );
  return (
    <a
      target="_blank"
      {...props}
      className={`bg-indigo-500 text-foreground hover:bg-indigo-600 ${defaultStyles}`}>
      {children}{" "}
    </a>
  );
}

export default Button;
