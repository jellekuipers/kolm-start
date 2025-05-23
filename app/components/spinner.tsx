export function Spinner() {
  return (
    <svg
      aria-label="Loading indicator"
      className="animate-spin size-4"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8" />
    </svg>
  );
}
