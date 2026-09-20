import Navbar from './component/shared/Navbar'
import Footer from './component/shared/Footer'
import Banner from './component/Banner';
import Technology from './component/Technology';
import { Suspense } from 'react';


const technologyFetch = async() =>{
  const res = await fetch('/public/Data.json');
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
   <Suspense fallback={<p>Loading......</p>}><Technology technologyPromise={technologyPromise}/></Suspense>
   
    <Footer />
    </div>
  );
};

export default App;