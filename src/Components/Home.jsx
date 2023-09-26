import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import PhonesCollection from "./PhonesCollection";
import { createContext } from "react";

export const DataContext = createContext();
const Home = () => {
     const data = useLoaderData();
     
    
     return (
          <div>
               <nav className="shadow-lg py-4">
                    <div className="flex justify-between max-w-7xl mx-auto px-8">
                         <div><h2 className="text-3xl font-bold">Phone Shop</h2></div>
                         <div className="flex gap-4 text-lg font-semibold">
                              <NavLink to={'/Home'}>Home</NavLink>
                              <NavLink to={'/favorites'}>Favorites</NavLink>
                         </div>
                    </div>
               </nav>
               
         <div className="max-w-7xl mx-auto px-8">
         <DataContext.Provider value={data}>
         <Outlet></Outlet>
         </DataContext.Provider>
         </div>
         
          
          </div>
     );
};

export default Home;