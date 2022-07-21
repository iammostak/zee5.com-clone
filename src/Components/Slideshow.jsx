import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function Slideshow() {
   const [data, setData] = useState([]);
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      axios.get(`https://json-server-mock-api-all.herokuapp.com/zeeSlide`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   const prevSlide = () => {
      setCurrent(current === 0 ? data.length - 1 : current - 1);
   }

   const nextSlide = () => {
      setCurrent(current === data.length - 1 ? 0 : current + 1);
   }

   return (
      <div className='slider'>
         <IoIosArrowBack className='arrow left' onClick={prevSlide} />
         {
            data.map((item, index) => (
               (index === current) && (
                  <div>
                     <img src={item.url} alt={item.title} />
                     <button className='slider-watch-btn'>
                        <FaPlay /> WATCH
                     </button>
                  </div>
               )
            ))
         }
         <IoIosArrowForward className='arrow right' onClick={nextSlide} />
      </div>
   );
}

export default Slideshow;