
import type { TechnologyType } from "../type/Type";
import { FaNodeJs, FaReact , FaJs, } from "react-icons/fa"
import { SiVuedotjs,SiSvelte, SiNextdotjs,SiPostgresql,SiRedis,SiTypescript ,SiDocker,SiTailwindcss } from "react-icons/si";
import './Technology.css'



interface stackProps{
  selectedTechnologies : TechnologyType[];
  onRemove: (technology:TechnologyType) => void ;
  onRemoveAll: () => void;
  
}
const StackIcon = ({name} :{name:string}) => {
  switch(name){

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
      return null;
    
  }
}


const Stack = ({selectedTechnologies, onRemove, onRemoveAll ,}:stackProps) => {
  return (
    <div className="stack card">
      <h1 className="stack-title">Your Stack</h1>

      <p className="count"> {selectedTechnologies.length === 0 ? 'No technologies selected.' : `${selectedTechnologies.length}Technology Selected` } </p>
      {selectedTechnologies.length === 0 && (
         
         <div className="empty-stack">
          <p>Your Stack is empty</p>

         </div>
      )
        
      }

      {selectedTechnologies.length > 0 && (
        <div className="stack-list">
          {selectedTechnologies.map((technology) =>(

            <div key={technology.name} className="stack-item">

              <div className="stack-item-icon">
                <StackIcon name = {technology.name} />
              </div>

              <div className="stack-item-content">
                
                <h2>{technology.name}</h2>
                <span> {technology.category} </span>
              
              </div>

              <button onClick={() => onRemove(technology)}
        className="remove-btn" >
      ×
      </button>



            </div>
          )
          
          )}

        </div>
      )

      }
      
      {selectedTechnologies.length > 0 && (
         
        <button onClick={onRemoveAll} className="remove-all-button"> Remove All</button>

      )}

    </div>
  );
};

export default Stack;
