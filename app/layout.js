export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Awsome Todos</h1>
        {children}
      </body>
    </html>
  );
}
