import CompanionForm from "@/app/components/CompanionForm";

const NewCompanion = () =>{
    return(
       <main className="min-lg:w-1/3 min-md:w-2/3  items-center justify-center">
        <article className="w-full gap-4 flex flex-col">
        <h1 className="text-3xl">Companion Builder</h1>
        <CompanionForm/>
        </article>
       </main>
    )
}

export default NewCompanion;