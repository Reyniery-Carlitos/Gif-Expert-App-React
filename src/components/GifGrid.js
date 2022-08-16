// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {     
     const {data:images, loading} = useFetchGifs(category);

     return (
          <>
               <h3 className="animate__animated animate__fadeIn animate"> {category} </h3>
               {loading && <p className="animate__animated animate__fadeIn"> Loading... </p>}
               <div className="card-grid">
                         {
                              images.map(item => 
                                   <GifGridItem key={item.id} {...item} />
                              )
                         }
               </div>
          </>
     );
};