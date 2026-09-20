
import { use } from 'react'
import type { TechnologyType } from '../type/Type';
import Technologys from './Technologyys';
interface TechnologyProps{
    technologyPromise: Promise<TechnologyType[]>
}

const Technology = ({technologyPromise}:TechnologyProps) => {

    console.log(technologyPromise)
    const technology= use(technologyPromise);
    console.log(technology,"technology")
    return (
        <div className='col-span-3 grid grid-cols-3 gap-5'>
           {/* { technology.length === 0 && <p>no technology here</p>} */}
          { technology.map((items) => (
            <Technologys key= {items.name} technology={ items} />

           ) 
           ) }
           
        </div>
    );
};

export default Technology;