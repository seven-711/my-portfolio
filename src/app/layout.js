import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "A draft portfolio built with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pb-4 pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
