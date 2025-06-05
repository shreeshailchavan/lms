"use client"
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchInput = () => {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams().get('topic') || '';
    const [searchQuery,setSearchQuery] = useState('');

    
    useEffect(()=>{
        const delayDebounceFn = setTimeout(()=>{
            if(searchQuery){
                const newurl = formUrlQuery({
                    params:searchParams.toString(),
                    key:"topic",
                    value:searchQuery
                });
                router.push(newurl,{scroll:false})
            }
            else{
                if(pathName === '/companions'){
                    const newUrl = removeKeysFromUrlQuery({
                        params:searchParams.toString(),
                        keysToRemove:['topic']
                    })
                }
            }
        },500);

    },[searchParams,searchQuery,router,pathName])

    return (<div className="relative border border-black rounded-lg flex items-center gap-2 px-2 py-1 h-fit">
        <Image src="/icons/search.svg"  alt="search" width={15} height={15}/>
        <input type="text" placeholder="Search Companions..."  className="outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
    </div>);
}