import { Inter, Poppins, Roboto } from "next/font/google";
import Navbar from "./components/Navbar";

import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
export const inter = Inter({ subsets: ["latin"] });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg bg-neutral-100 ${poppins.className}`}>
        <div>
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
