import { Link } from "react-router-dom";

const Phones = ({phone}) => {
     const {brand_name, image, phone_name, price, rating, id}=phone;
     return (
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
     <p className="block font-sans text-base font-medium leading-relaxed antialiased">
         Rating: {rating}
     </p>
     <p className="block font-sans text-base font-medium leading-relaxed antialiased">
          Brand: {brand_name}
     </p>
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed  antialiased">
        {phone_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed antialiased">
        ${price}
      </p>
    </div>
    
  </div>
  <div className="p-6 pt-0">
    <Link to={`Phonedetails/${id}`}>
    <button
      className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      See Details
    </button>
    </Link>
  </div>
</div>
     );
};

export default Phones;