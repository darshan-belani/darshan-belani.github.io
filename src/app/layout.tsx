import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darshan Belani | SR. Laravel & Node.js Developer — Next.js, React",
  description:
    "Senior Laravel & Node.js Developer with 6+ years of experience building scalable web and mobile applications. Specialize in food-tech, sports, real estate, and healthcare domains. Based in Ahmedabad, India.",
  keywords: ["Laravel Developer", "Node.js Developer", "Next.js Developer", "React Developer", "PHP Developer", "Full Stack Developer", "Ahmedabad", "India", "Darshan Belani"],
  authors: [{ name: "Belani Darshan A" }],
  openGraph: {
    title: "Darshan Belani | SR. Laravel & Node.js Developer",
    description: "6+ years building scalable apps with Laravel, Node.js, Next.js & React",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{ fontFamily: "'Inter', sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
