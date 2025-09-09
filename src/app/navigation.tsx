import Image from "next/image";
import Link from "next/link";
import TransparentBtn from "./handlers/TransparentBtn";
import { usePathname } from "next/navigation";

const AppNav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-between mb-4">
      <div className="flex items-center">
        <Image
          src="/rick.png"
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
          <TransparentBtn variant="contained" color="primary">
            Back to Main Page
          </TransparentBtn>
        </Link>
      )}
    </nav>
  );
};

export default AppNav;
