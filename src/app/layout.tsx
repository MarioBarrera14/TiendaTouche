
import Nav from "@/components/nav/nav";
import { inter } from "@/config/fonts";
import "./globals.css";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}

      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
