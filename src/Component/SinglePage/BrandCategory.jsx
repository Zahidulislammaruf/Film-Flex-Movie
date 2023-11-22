import { useLoaderData, useParams } from "react-router-dom";
import CategoriesGroup from "../../DetailsPage/CategoriesGroup";
import { useEffect, useState } from "react";
import nodata from '../../assets/nodata.gif'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const BrandCategory = () => {
  const [data,setData] = useState(false)
  const brand = useLoaderData()
  const {category} = useParams()
    console.log(category)
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        const matched = data.filter((singleData) => singleData.category === category);
        setSlider(matched[0].sliders);
      });
  }, [category]);
  console.log(slider)
    
    
  

    
    
    
    
    useEffect(()=>{
      if(brand.length>0){
        setData(true)
      }
    },[])
    

    return (
        <div className=" container mx-auto mt-24 mb-10">
          
         
          
            {
               data ?
               <div>

                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-white">
        {slider.map((singleslider, idx) => (
          <SwiperSlide key={idx} singleSlider={singleslider}>
            <div className="h-[800px] lg:h-[400px]">
              <div className="flex flex-col lg:flex-row justify-around items-center">
                <div >
                  <h2 className="text-4xl font-bold text-center lg:text-left px-4 lg:px-0 text-emerald-400">
                    <span className=" text-red-600">UpComming Movie</span> <br /> Book Your Ticket Now <br />{" "}
                    <span className="text-amber-400">{category.toUpperCase()}</span>
                  </h2>
                </div>
                <div className="">
                  <img className="h-[400px]" src={singleslider.image} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

               <div className=" grid grid-cols-1 md:grid-cols-3 gap-14 p-4 mx-auto"> 
               { brand.map(brand=> <CategoriesGroup key={brand._id} brand={brand}></CategoriesGroup>) }   
                </div>
               </div>
               
                 : 
                 
                 <>
                  <div className="mt-24 text-2xl text-center">
                    <img className="w-48 mx-auto" src={nodata} alt="" />
                    <h2 className="mt-4 ">There Are No Movie Avaiable</h2>
                    </div>
                 </>
            }
          
        </div>
    );
};

export default BrandCategory;