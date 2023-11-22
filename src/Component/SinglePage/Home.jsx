
import Categoryies from "./Categoryies";
import Footer from "./Footer";
import Header from "./Header";
import Priavcy from "./Priavcy";
import WhyUs from "./WhyUs";



const Home = () => {
    
    return (
        <div >
            <Header></Header>
            <Categoryies ></Categoryies>

            <WhyUs></WhyUs>
           <Priavcy></Priavcy>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;