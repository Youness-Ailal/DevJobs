const defaultStyles = "hover:bg- px-8 py-3 rounded-md text-md font-semibold ";

function Button({ children, variation = "default", ...props }) {
  if (variation === "secondary")
    return (
      <button
        {...props}
        className={`bg-indigo-100 text-indigo-500 hover:bg-indigo-50 dark:bg-slate-900 dark:text-indigo-50 dark:hover:bg-slate-800  ${defaultStyles}`}>
        {children}{" "}
      </button>
    );
  if (variation === "link")
    return (
      <button
        {...props}
        className={`dark:text-slate-300 text-slate-600 dark:hover:text-slate-200 hover:text-slate-950 text-md underline underline-offset-4`}>
        {children}{" "}
      </button>
    );
  return (
    <button
      {...props}
      className={`bg-indigo-500
      dark:disabled:bg-indigo-950 dark:disabled:text-slate-500
      text-foreground hover:bg-indigo-600 disabled:bg-indigo-400 disabled:text-slate-100 *: ${defaultStyles}`}>
      {children}{" "}
    </button>
  );
}

export default Button;
