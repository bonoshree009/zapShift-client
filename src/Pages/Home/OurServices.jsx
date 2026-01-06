import { FaGavel, FaUserShield,FaBalanceScale,FaFileContract,FaHandshake, FaSearch,} from "react-icons/fa";
import servicesPic from "../../assets/service.png"

const services = [
  {
    id: 1,
    title: "Express  & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: servicesPic,
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: servicesPic,
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: servicesPic,
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: servicesPic,
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    icon: servicesPic,
  },
  {
    id: 6,
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: servicesPic,
  },
];

const OurServices = () => {
  return (
    <section className="bg-secondary p-2 md:p-16 rounded-xl my-4">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12  text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto">
            We provide trusted legal services to help individuals and businesses
            with professional guidance and reliable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div  key={service.id} className="p-10 flex justify-center flex-col rounded-2xl  hover:bg-primary transition text-center bg-white" >
              <div className="text-4xl text-center mx-auto mb-4"><img src={service.icon} alt="" /> </div>
              <h2 className="text-xl font-bold mb-2">
                {service.title}
              </h2>

              <p className="text-black">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
