import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
     
     const [categories, setCategories] = useState(['Naruto']);

     return (
          <>
               <h1> GifExpertApp </h1>
               <AddCategory setCategories={setCategories} /> 

               <ol> 
                    {
                         categories.map((category) => 
                              <GifGrid key={category} category={category} />
                              // <li key={category}> {category} </li>
                         )
                    }
               </ol>
          </>
     );
};

export default GifExpertApp;