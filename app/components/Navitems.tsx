"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {label:"Home",href:"/"},
    {label:"Companions",href:"/companions"},
    {label:"My-Journey",href:"/my-journey"},

]
const Navitems = () =>{
    const pathName = usePathname();

    return(
        <nav className="flex gap-4 items-center">
            {
                navItems.map(({label,href}) =>(
                    <Link href={href} className={cn(pathName === href && 'text-primary font-semibold')}>{label}</Link>
                ))
            }
        </nav>
    );
}

export default Navitems;