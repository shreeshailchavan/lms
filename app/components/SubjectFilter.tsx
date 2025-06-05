"use client";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SubjectFilter = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get("subject") || "";
  const [subject, setSubject] = useState(query);
  const router = useRouter();
  useEffect(() => {
    let newurl = "";
    if (subject === "all") {
      newurl = removeKeysFromUrlQuery({
        params:searchParams.toString(),
        keysToRemove:['subject']
      });
    }
    else{
        newurl = formUrlQuery({
            params:searchParams.toString(),
            key:'subject',
            value:subject
        })
    }
    router.push(newurl,{scroll:false})
  }, [subject]);

  return (
    <Select onValueChange={setSubject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Select subject">Select subject</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
