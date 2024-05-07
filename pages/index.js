import Image from "next/image";
import { Inter } from "next/font/google";
import { Landingpage } from "@/components/landingpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Landingpage />
    </div>
  );
}
