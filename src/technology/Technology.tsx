
import { use } from 'react'
import type { TechnologyType } from '../type/Type';
interface TechnologyProps{
    technologyPromise: Promise<TechnologyType[]>
}

const Technology = ({technologyPromise}:TechnologyProps) => {

    console.log(technologyPromise)
    const technology= use(technologyPromise);
    console.log(technology,"technology")
    return (
        <div className='col-span-3 grid grid-cols-3 gap-5'>
           { technology.length === 0 && <p>no technology here</p>}
           
        </div>
    );
};

export default Technology;