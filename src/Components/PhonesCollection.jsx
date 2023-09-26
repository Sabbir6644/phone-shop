import { useContext } from "react";
import { DataContext } from "./Home";
import Phones from "./Phones";

const PhonesCollection = () => {
     const data = useContext(DataContext);
     return (
         
          <div>
               <div className="min-h-[50vh] bg-green-200 flex justify-center items-center">
                    <div> <input className="h-14 lg:w-[800px] rounded-md" type="text" />
                         <button className="px-4 py-2 rounded-md bg-blue-500 text-white -ml-24">Search</button>
                    </div>
               </div>
               <h2 className="text-2xl font-semibold my-7 text-center">Our Phones Collections</h2>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
               data.map(phone => <Phones key={phone.id} phone={phone}></Phones>)
          }
          </div>
          </div>
     );
};

export default PhonesCollection;