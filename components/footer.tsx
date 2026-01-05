import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return <footer className="fixed bottom-0 left-0 right-0 h-14 bg-[#9f004d] text-white z-50 border-t border-black/10 dark:border-white/5">
        <div className="h-full flex items-center justify-between px-4">
            <div className="text-sm">
                {currentYear} {APP_NAME}. All Rights Reserved
            </div>

            <div className="text-sm">
                <Link
                href="/api/auth/signin"
                className="underline hover:no-underline text-white/90 hover:text-white"
                >
                    Authorized? Login from Here
                </Link>
            </div>
        </div>
    </footer> ;
}
 
export default Footer;