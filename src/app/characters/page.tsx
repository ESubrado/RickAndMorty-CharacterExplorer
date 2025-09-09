import Link from "next/link";
import Button from '@mui/material/Button';

export default function Character() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 px-4 pb-20 gap-16 sm:p-20"
    style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
         <nav className="w-full flex justify-end mb-8 p-4">
            <Link href="/" passHref>
                <Button variant="contained" color="primary">
                    Back to Main Page
                </Button>
            </Link>
        </nav>
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Character Page</h1>
            <p className="text-lg">Explore Rick and Morty characters here!</p>
        </div> 
    </div>
  );
}