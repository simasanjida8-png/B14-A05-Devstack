
import { use, useState } from 'react'
import type { TechnologyType } from '../type/Type';
import Technologys from './Technologyys';

import Stack from './Stack';
import toast from "react-hot-toast";

interface TechnologyProps{

    technologyPromise: Promise<TechnologyType[]>
}

const Technology = ({technologyPromise}:TechnologyProps) => {

    // console.log(technologyPromise)

    const technology= use(technologyPromise);

    // console.log(technology,"technology")
    const [selectedTechnologies , setSelectedTechnologies] = 

    useState<TechnologyType[]>([]);

    const handleAddStack = (technology: TechnologyType) =>{

        const alreadyAdded = selectedTechnologies.some((item) =>

            item.name === technology.name);
            
            if (alreadyAdded){
                toast.error(`${technology.name} is already in your stack!`);
                return;
            }

            setSelectedTechnologies([...selectedTechnologies, technology]);

            toast.success(`${technology.name}added to your stack`)
            
    };

    const handleRemoveStack = (technology: TechnologyType) =>
    {
        const remainingTechnologies = selectedTechnologies.filter(
            (item) => item.name !== technology.name
        );

        setSelectedTechnologies(remainingTechnologies);
        toast.success(`${technology.name} remove from your stack`)
    }
    
    const handleRemoveAll = () => {
        setSelectedTechnologies([])
        toast.success('All Remove')
    }

    return (

      <div className='technology-layout'>

        <div className='technology-grid'>

           

          { technology.map((items) => {
            const isAdded = selectedTechnologies.some ((item) => item.name === items.name) 
          

          return (


            <Technologys key= {items.name} technology={ items} isAdded = {isAdded}
            onAdd = {handleAddStack} />


          )}
          )
           }
           
        </div>
        <div className='stack-1'>
            <Stack  selectedTechnologies = {selectedTechnologies} 
            
            onRemove = {handleRemoveStack}
            onRemoveAll ={handleRemoveAll}
            
            />
        </div>
      </div>  
    );
};

export default Technology;