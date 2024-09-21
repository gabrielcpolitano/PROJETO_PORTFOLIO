"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-[#202020]">
                {`< Gabriel Politano >`}
            </span><br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Desenvolvedor',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Front-End',
                1000,
                'Inovador e Estratégico',
                1000,
                'Colaborador Efetivo',
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-base sm:text-2xl"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mr-3">
          Como não uso redes sociais, criei este site para compartilhar minhas certificações, momentos das minhas viagens e os lugares por onde passei. Seja bem-vindo(a) a minha vida!
          </p>
          <div>
            <button className="px-6 py-3 w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 via-red-500 to-black hover:bg-slate-200 text-black">Trabalhos</button>
            <button className="px-1 py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-black hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className = "rounded-full bg-[#FFFFFF] w-[300px] h-[250px] m-auto relative ml-8 mt-5 mb-8 lg:mt-0">
            <Image 
              src="/images/profile-pic-removebg-preview.png"
              alt="imagem do HERO"
              className="-translate-x-7 -translate-y-3 select-none"
              draggable="false"
              width={300}
              height={300}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection