
import { use } from 'react'

const Technology = ({technologyPromise}) => {

    console.log(technologyPromise)
    const technology = use(technologyPromise);
    console.log(technologyPromise)
    return (
        <div>
            
        </div>
    );
};

export default Technology;