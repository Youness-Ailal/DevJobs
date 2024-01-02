function Input({ children, ...props }) {
  return (
    <div className=" h-full relative">
      <div
        className={`pointer-events-none select-none absolute left-[1rem] top-1/2 -translate-y-1/2`}>
        {children}
      </div>
      <input
        {...props}
        className="bg-white dark:bg-foreground2 px-6 py-4 pl-[3.5rem] h-full w-full text-lg font-medium placeholder:text-md dark:text-slate-50 border-slate-300 placeholder:text-slate-400 border-r-[1px]  dark:border-slate-700 placeholder:font-normal "
        {...props}
      />
    </div>
  );
}

export default Input;
