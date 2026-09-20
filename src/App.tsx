import Navbar from './component/shared/Navbar'
import Footer from './component/shared/Footer'
import Banner from './component/Banner';
import Technology from './technology/Technology';
import { Suspense } from 'react';
import type { TechnologyType } from './type/Type';


const technologyFetch = async():Promise<TechnologyType[]> =>{
  const res = await fetch('/Data.json');
  const data = await res.json();
  return data

}



const App = () => {
  const technologyPromise = technologyFetch()

  console.log(technologyPromise)
  return (

    <div>
    

    <Navbar />
   <Banner />
   <main>
    <div className='container mx-auto my-10'>
      <div className='grid grid-cols-4 gap-5'>
        <Suspense fallback={<p>Loading......</p>}><Technology technologyPromise={technologyPromise}/></Suspense>
      </div>
    </div>
   </main>
   
    <Footer />
    </div>
  );
};

export default App;