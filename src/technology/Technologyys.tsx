import type { TechnologyType } from "../type/Type"


export interface TechnologysProps {
  technology: TechnologyType
}

export default function Technologys({ technology}: TechnologysProps) {
    
    return (
      <div>
        <h2>
          {technology.name}
        </h2>
        <p>{technology.description}</p>
      </div>
    )
}