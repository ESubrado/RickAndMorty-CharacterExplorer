import Image from "next/image";
import Link from "next/link";
import TransparentBtn from "@/custom/TransparentBtn";
import { usePathname } from "next/navigation";

const AppNav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-between mb-4">
      <div className="flex items-center">
        <Image
          src="/rickalt.png"
          alt="Rick icon"
          width={40}
          height={40}
        />
      </div>
      {pathname === "/" ? (
        <Link href="/characters" className="text-lg font-medium hover:underline hover:underline-offset-4">
          <TransparentBtn variant="contained">
            Get Started
          </TransparentBtn>
        </Link>
      ) : (
        <Link href="/" className="text-lg font-medium hover:underline hover:underline-offset-4">
          <TransparentBtn variant="contained">
            Back to Home
          </TransparentBtn>
        </Link>
      )}
    </nav>
  );
};

export default AppNav;
