import React from 'react'

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat" 
        }}
      >

        <div></div>
      </div>
      
      <div className="text-white rounded-b-xl bg-[#181818] p-3">
        <h5 className="font-semibold mb-1">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );

}

export default ProjectCard