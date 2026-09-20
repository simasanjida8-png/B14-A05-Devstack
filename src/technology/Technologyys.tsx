import { useState } from "react"
import type { TechnologyType } from "../type/Type"


export interface TechnologysProps {
  technology: TechnologyType
}

export default function Technologys({ technology}: TechnologysProps) {
  const [added, setAdded] = useState<boolean>(false)
  const handleAddStack = () => {

    setAdded(!added)
  }
    
    return (
// top part

      <div className={`rounded-2xl border-2 bg-white p-5 ${added ? "border-pink-800" : "border-gray-100"}`}>
        <div>
          <h2 className="text-xl font-bold">
          {technology.name}
        </h2>
        
        <p className="mt-2 text-gray-500">{technology.description}</p>
        </div>
        <h2>{technology.level}</h2>
        <h2>{technology.category}</h2>
        <h2>{technology.badge}</h2>
        <h2>{technology.rating}</h2>
        
        <button className="rounded" onClick={handleAddStack}>

        {added? 'Added' : 'Add to Stack'}

        </button>

      </div>
    )
}