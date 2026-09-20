import Navbar from './component/shared/Navbar'
import Footer from './component/shared/Footer'
import Banner from './component/Banner';
import Technology from './component/Technology';


const technologyPromise = async() =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data

}



const App = () => {

  console.log(technologyPromise)
  return (

    <div>

    <Navbar />
   <Banner />
   <Technology technologyPromise={technologyPromise}/>
    <Footer />
    </div>
  );
};

export default App;