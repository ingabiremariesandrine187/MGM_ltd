import './globals.css' 


export const metadata = {
  title: "MGM Multipurpose Ltd",
  description: "Construction company website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
