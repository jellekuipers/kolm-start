export function getUrl() {
  const base = (() => {
    if (typeof window !== "undefined") return "";

    return `http://localhost:${process.env.PORT ?? 3000}`;
  })();

  return `${base}/api/trpc`;
}
