import React from 'react'
import Image from "next/image"

const AboutSection = () => {
  return (
  <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/me1.jpg" width={500} height={500} alt="me"/>
      <div>
        <h2>About Me</h2>
        <p>Sou musico e desenvolvedor, toco violino e adoro viajar para conhecer novas culturas e línguas. A programação me inspira, pois, por meio dela, posso ajudar empresas a alcançarem seus objetivos e até mesmo realizarem seus sonhos. Tenho mais de 20 formações pela FIAP, a maior faculdade de tecnologia do Brasil. Na foto ao lado, estou tentando &quot;segurar&quot; a Torre de Pisa, pois ela foi &quot;codificada&quot; de forma errada.</p>
      </div>
    </div>
  </section>
  )
}

export default AboutSection