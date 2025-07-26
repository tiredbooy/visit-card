export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl border shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
