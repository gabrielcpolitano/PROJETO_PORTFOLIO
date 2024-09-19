"use client"
import React, { useTransition, useState } from 'react'
import Image from "next/image"
import TabButton from  "./TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Comunicativo</li>
        <li>Devleloper Front-End</li>
        <li>Inglês - Avançado</li>
        <li>Espanhol - Intermediário</li>
        <li>Italiano - Intermediário</li>
      </ul>
    )
  },
  {
    title: "Viagens",
    id: "viagens",
    content: (
      <ul className="list-disc pl-2">
        <li>Italia</li>
        <li>Chile</li>
      </ul>
    )
  },
  {
    title: "Certificado",
    id: "certificado",
    content: (
      <ul className="list-disc pl-2">
        <li>Algoritmos</li>
        <li>Big Data & Analytics</li>
        <li>Blockchain</li>
        <li>Blockchain Advanced</li>
        <li>Branding Analytics</li>
        <li>Business Management & IT Services</li>
        <li>Customer Experience Management</li>
        <li>Cybersecurity</li>
        <li>Data Driven Decision</li>
        <li>Design Thinking</li>
        <li>DevOps & Agile Culture</li>
        <li>Dominando IoT</li>
        <li>Future-Proof Organizations</li>
        <li>Game Design</li>
        <li>Governança de TI</li>
        <li>Inovação Disruptiva</li>
        <li>Inteligência Artificial e Computacional</li>
        <li>Leadership and Corporate Accountability</li>
        <li>Programação em Banco de Dados</li>
        <li>Social Media Planning</li>
        <li>User Experience</li>
      </ul>
    )
  }
]

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
    <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/me1.jpg" width={500} height={500} alt="me" className="rounded-lg w-full mt-5" />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white my-4">Quem Sou</h2>
        <p className="text-base lg:text-lg">
          Sou musico e desenvolvedor, toco violino e adoro viajar para conhecer novas culturas e línguas. A programação me inspira, pois, por meio dela, posso ajudar empresas a alcançarem seus objetivos e até mesmo realizarem seus sonhos. Tenho mais de 20 formações pela FIAP, a maior faculdade de tecnologia do Brasil. Na foto ao lado, estou tentando &quot;segurar&quot; a Torre de Pisa, pois ela foi &quot;codificada&quot; de forma errada.
        </p>
        <div className="flex flex-row justify-start mt-8">
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
            selecTab={() => handleTabChange("certificado")}
            active={tab === "certificado"}
          > 
            {" "}
            Certificado{" "}
          </TabButton>
         </div>
         <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection