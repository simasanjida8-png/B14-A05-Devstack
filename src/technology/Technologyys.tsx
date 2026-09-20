// import { useState } from "react"
import type { TechnologyType } from "../type/Type"
import { FaNodeJs, FaReact , FaJs, } from "react-icons/fa"
import { SiVuedotjs,SiSvelte, SiNextdotjs,SiPostgresql,SiRedis,SiTypescript ,SiTailwindcss,
  SiDocker} from "react-icons/si";

import './Technology.css'


export interface TechnologysProps {
  technology: TechnologyType
  isAdded : boolean;
  onAdd : (technology :TechnologyType) => void;
}

// icons

const TechnologyIcon = ({name   }: {name: string}) =>{
  switch (name){
    case 'React':
    return <FaReact className="react-icon" />
     case 'Vue.js':
      return <SiVuedotjs className="vue-icon"/>
     case 'Sevlte':
      return <SiSvelte className="sevelt-icon"/>
     case 'Next.js':
      return <SiNextdotjs className="vue-icon"/>
     case 'Node.js':
      return <FaNodeJs className="node-icon"/>
    
     case 'PostgreSQL':
      return <SiPostgresql className="postgres-icon"/>
  
     case 'Redis':
      return <SiRedis className="redis-icon"/>
    
     case 'Java-Script':
      return <FaJs className="javascript-icon"/>
     case 'TypeScript':
      return <SiTypescript className="typescript-icon"/>
     case 'Tailwind CSS':
      return <SiTailwindcss className="tailwind-icon"/>
     case 'Docker':
      return <SiDocker className="-icon"/>
     
      default :
      return  null;
  }
}

export default function Technologys({ technology , isAdded, onAdd}: TechnologysProps){

   return (

    <div
    className={`technology-card ${isAdded ? "selected-card" : ""}`}>

      <div className="card-header">

       <div className="technology-logo">
        
          <TechnologyIcon name = {technology.name} />
       </div>
        
        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <div className="card-contented">

       <h2 className="text-xl font-bold">
      {technology.name}
      </h2>

      <p> {technology.description}</p>

    </div>
     

      <p>
      <span className="font-semibold">Level:</span>{" "}{technology.level}
      </p>

      <p>
        <span className="font-semibold">Catagory:</span>{" "} 
        {technology.category}
      </p>

       <p>
        <span className="font-semibold">Badge:</span>
        {" "}{
          technology.badge
        }
       </p>


        <p>
          <span className="font-semibold">Rating:</span>{" "}{
            technology.rating
          }
        </p>


   

    <button className={ ` mt-5 w-full rounded-md px-4 py-2 text-white ${ isAdded ? " bg-pink-700" :"bg-gray-900 hover:bg-gray-700"}`} onClick= {() => onAdd(technology)}>
      {isAdded ? "Added" :"Add to Stack"}
    </button>


     </div>

   )
}

