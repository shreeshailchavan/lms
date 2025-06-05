import { getAllCompanions } from "@/lib/actions/companion.actoins";
import CompanionCard from "../components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import { SearchInput } from "../components/SearchInput";
import { SubjectFilter } from "../components/SubjectFilter";

const CompanionsLibrary = async ({searchParams}:SearchParams) =>{
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';
    const companions = await getAllCompanions({subject,topic});
    console.log(companions);
    
    return <div>
        <main>
            <section className="flex justify-between max-sm:flex-col">
                <h1 className="text-2xl">Companions library</h1>
                <div className="flex gap-2">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            <section className="companions-grid">
                {
                    companions.map((comapanion)=>(
                        <CompanionCard 
                        key={comapanion.id}
                        {...comapanion}
                        color={getSubjectColor(comapanion.subject)}
                        />
                    ))
                }
            </section>
        </main>
    </div>
}

export default CompanionsLibrary;