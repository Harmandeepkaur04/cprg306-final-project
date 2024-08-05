import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/page"; // Adjust the path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Horizon Weather App",
  description: "Stay updated with the latest weather conditions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
