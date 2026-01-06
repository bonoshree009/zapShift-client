import { FaUserCheck, FaSearch, FaComments, FaGavel } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";


const HowItWorks = () => {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-2">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          How It Works
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8">

          <div className="p-6 rounded-xl shadow hover:bg-primary transition flex justify-center items-center card">
             <CiDeliveryTruck className="text-5xl text-black mx-auto mb-4" />
            <h1 className="text-xl font-semibold mb-2 card-title">Booking Pick & Dropt</h1>
            <p className="text-gray-600 small-desc">
          From personal packages to business shipments — we deliver on time, every time.
            </p>
            <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
          </div>

        
          <div className=" p-6 rounded-xl shadow  hover:bg-primary transition flex justify-center items-center card">
            <CiDeliveryTruck className="text-5xl text-black mx-auto mb-4" />
            <h1 className="text-xl font-semibold mb-2 card-title">Cash On Delivery</h1>
            <p className="text-gray-600 small-desc">
              From personal packages to business shipments — we deliver on time, every time.
            </p>
               <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
          </div>

        
          <div className=" p-6 rounded-xl shadow hover:bg-primary  transition flex justify-center items-center card">
              <CiDeliveryTruck className="text-5xl text-black mx-auto mb-4" />
            <h1 className="text-xl font-semibold mb-2 card-title text-center">Delivery Hub</h1>
            <p className="text-gray-600 small-desc">
            From personal packages to business shipments — we deliver on time, every time.
            </p>
                <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
            
          </div>
         
          <div className=" p-6 rounded-xl shadow hover:bg-primary transition flex justify-center items-center card">
             <CiDeliveryTruck className="text-5xl text-black mx-auto mb-4" />
            <h1 className="text-xl font-semibold mb-2 card-title">Booking SME & Corporate</h1>
            <p className="text-gray-600 small-desc">
               From personal packages to business shipments — we deliver on time, every time. </p>
                   <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
