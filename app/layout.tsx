import './globals.css';

export const metadata = {
  title: 'Formula D Companion',
  description: 'Companion for rolling your dice in Formula D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
