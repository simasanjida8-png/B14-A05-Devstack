import Navbar from './component/shared/Navbar'
import Footer from './component/shared/Footer'
import Banner from './component/Banner';
import Technology from './technology/Technology';
import { Suspense } from 'react';
import type { TechnologyType } from './type/Type';
import Bootom from './component/shared/Bootom';
import Techno from './technology/Techno';
import { Toaster } from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';


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
    <Toaster position='top-right' toastOptions={{duration:2000}} />

    <Navbar />
   <Banner />
   <Techno />
   <main>
    <div className='container mx-auto my-10'>
      <div className=''>
        <Suspense fallback={<p>Loading......</p>}><Technology technologyPromise={technologyPromise}/></Suspense>
      </div>
    </div>
   </main>
   <FaStar />
    <Footer />
    <Bootom />
    </div>
  );
};

export default App;