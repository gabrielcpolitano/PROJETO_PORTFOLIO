import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
{
  id: 1,
  title: "Sofá e Pipoca: Vida de Rei",
  description: "Eu em Casa",
  image: "/images/me2.jpg",
  tag: ["All", "Web"]
},
{
  id: 2,
  title: "Fazendo Pose em Pisa",
  description: "Eu em Pisa",
  image: "/images/me3.jpg",
  tag: ["All", "Web"]
},
{
  id: 3,
  title: "Congelando no Chile, Mas com Estilo",
  description: "Eu no Chile",
  image: "/images/me4.jpg",
  tag: ["All", "Web"]
},
{
  id: 4,
  title: "Eu e os Heróis Salvando o Mundo",
  description: "Eu com os Heróis",
  image: "/images/me5.jpg",
  tag: ["All", "Web"]
},
{
  id: 5,
  title: "Pé na Estrada: Aeroporto Edition",
  description: "Eu no Aeroporto",
  image: "/images/me6.jpg",
  tag: ["All", "Web"]
},
{
  id: 6,
  title: "Domingo de Preguiça em Casa",
  description: "Eu em Casa",
  image: "/images/me7.jpg",
  tag: ["All", "Web"]
},
{
  id: 7,
  title: "Irmão: Parceiro ou Rival? Depende do Dia!",
  description: "Eu com meu irmão",
  image: "/images/me8.jpg",
  tag: ["All", "Web"]
},

  

]

const FotosSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white my-5">
        Minhas Fotos
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  )
}

export default FotosSection