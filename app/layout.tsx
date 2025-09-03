import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Auto Way",
  description: "Découvrez la meilleure application de présentation automobile au monde.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
