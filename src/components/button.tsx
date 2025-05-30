export const Button = ({
  children,
  onClick,
  type,
}: {
  children: React.ReactNode;
  onClick: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) => {
  return (
    <button
      className="rounded-md bg-black px-4 py-2 font-semibold text-white hover:bg-black/80"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
