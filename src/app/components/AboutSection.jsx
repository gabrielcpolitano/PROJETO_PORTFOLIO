"use client"
import React, { useTransition, useState } from 'react'
import Image from "next/image"
import TabButton from  "./TabButton"

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
  <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/me1.jpg" width={500} height={500} alt="me" className="rounded-lg" />
      <div>
        <h2 className="text-4xl font-bold text-white my-4">Quem Sou</h2>
        <p className="text-base lg:text-lg">
          Sou musico e desenvolvedor, toco violino e adoro viajar para conhecer novas culturas e línguas. A programação me inspira, pois, por meio dela, posso ajudar empresas a alcançarem seus objetivos e até mesmo realizarem seus sonhos. Tenho mais de 20 formações pela FIAP, a maior faculdade de tecnologia do Brasil. Na foto ao lado, estou tentando &quot;segurar&quot; a Torre de Pisa, pois ela foi &quot;codificada&quot; de forma errada.
        </p>
        <div className="flex flex-row mt-8">
          <TabButton
            selecTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          > 
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selecTab={() => handleTabChange("viagens")}
            active={tab === "viagens"}
          > 
            {" "}
            Viagens{" "}
          </TabButton>
          <TabButton
            selecTab={() => handleTabChange("conhecimentos")}
            active={tab === "conhecimentos"}
          > 
            {" "}
            Conhecimentos{" "}
          </TabButton>
         </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection