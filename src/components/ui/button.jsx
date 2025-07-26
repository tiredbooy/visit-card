export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
