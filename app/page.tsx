import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from './components/CompanionCard'
import CompanionsList from './components/CompanionsList'
import Cta from './components/Cta'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl font-semibold'>Welcome to my LMS Saas</h1>
      <section className='home-section'>
        <CompanionCard
         id="123"
         name="Neura the Brainy Explorer"
         topic="Topic: Neural Network of the Brain"
         subject="science"
         duration={45}
         color="#ffda6a"
        />
        <CompanionCard
          id="456"
         name="Neura the Brainy Explorer"
         topic="Topic: Neural Network of the Brain"
         subject="science"
         duration={45}
         color="#ffda6a"/>
        <CompanionCard
          id="789"
         name="Neura the Brainy Explorer"
         topic="Topic: Neural Network of the Brain"
         subject="science"
         duration={45}
         color="#ffda6a"
        />
      </section>
      <section className='home-section'>
        <CompanionsList
        title="Recently completed companions"
        companions = {recentSessions}
        classNames = "w-2/3 max-lg:w-full "
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page