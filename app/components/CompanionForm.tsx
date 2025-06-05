"use client";
import { subjects, voices } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { createCompanion } from "@/lib/actions/companion.actoins";
import { redirect } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, { message: "Companion is required" }).max(50),
  subject: z.string().min(1, { message: "Subject is required" }).max(50),
  topic: z.string().min(1, { message: "Topic is required" }).max(50),
  voice: z.string().min(1, { message: "Voice is required" }).max(50),
  style: z.string().min(1, { message: "Style is required" }).max(50),
  duration: z.coerce.number().min(1, { message: "Duration is required" }),
});

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const companion = await createCompanion(values);
    if(companion){
        redirect(`/companions/${companion.id}`);
    }
    else{
        console.log("failed to create the companion");
        redirect("/");
        
    }

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion subject</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select subject"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem
                        value={subject}
                        key={subject}
                        className="capitalize"
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion topic</FormLabel>
              <FormControl>
                <Textarea placeholder="topic" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <FormField
            control={form.control}
            name="voice"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Comapnion Voice</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className="input capitalize">
                                <SelectValue placeholder="Companion voice"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
            )}
            >   
            </FormField>
           <FormField
            control={form.control}
            name="style"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Comapnion Style</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className="input capitalize">
                                <SelectValue placeholder="Companion style"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="formal">Formal</SelectItem>
                                <SelectItem value="casual">Casual</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
            )}
            >   
            </FormField>
            <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration</FormLabel>
              <FormControl>
                <Input type="number"  placeholder="15" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer w-full">Build your companion</Button>
      </form>
    </Form>
  );
};

export default CompanionForm;
