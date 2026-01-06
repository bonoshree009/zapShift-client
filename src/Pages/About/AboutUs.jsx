import React, { useState } from 'react';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("Story");

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

    return (
        <div className='bg-white p-20 rounded'>
            <h1 className='text-4xl font-bold'>About Us</h1>
            <p className='text-gray-400 py-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br />packages to business shipments — we deliver on time, every time.</p>     
             <div className='py-7'>
                 <div className="flex gap-8  mb-8">
                     {tabs.map((tab) => ( <button key={tab} onClick={() => setActiveTab(tab)}className={`pb-3 text-sm font-medium transition ${
              activeTab === tab ? "text-green-700 border-b-2 border-green-700": "text-gray-400 hover:text-gray-600"}`}>
            {tab} </button> ))}
      </div>
       <div className="text-gray-500 text-sm leading-relaxed space-y-6">
        {activeTab === "Story" && (
          <>
            <p>
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands.
            </p>

            <p>
              Whether it's a personal gift or a time-sensitive business
              delivery, we ensure it reaches its destination — on time, every
              time.
            </p>

            <p>
              Our journey is driven by innovation, transparency, and the belief
              that delivery should be simple and dependable for everyone.
            </p>
          </>
        )}

        {activeTab === "Mission" && (
         <>
          
  
    <p>
      Our mission is to transform parcel delivery into a seamless, reliable,
      and stress-free experience for everyone. We aim to bridge the gap between
      senders and receivers by providing fast, secure, and technology-driven
      logistics solutions that people can truly depend on.
    </p>

    <p>
      We are committed to leveraging real-time tracking, smart route planning,
      and efficient operations to ensure every package reaches its destination
      safely and on time. Whether it’s an urgent business shipment or a
      meaningful personal parcel, we treat every delivery with equal care and
      responsibility.
    </p>

    <p>
      Customer satisfaction is at the heart of everything we do. Our mission is
      not just to deliver parcels, but to build trust through transparency,
      responsive support, and consistent service quality. We continuously
      listen to our customers and evolve our services to meet their changing
      needs.
    </p>

    <p>
      As we grow, we strive to create a sustainable delivery ecosystem by
      adopting eco-friendly practices, empowering our delivery partners, and
      embracing innovation. Our long-term mission is to become a reliable
      logistics partner that supports businesses, connects communities, and
      makes everyday deliveries simpler and smarter.
    </p>
         </>
        )}

        {activeTab === "Success" && (
          <p>
            We’ve successfully delivered thousands of parcels nationwide,
            earning long-term partnerships and customer satisfaction along the
            way.
          </p>
        )}

        {activeTab === "Team & Others" && (
          <p>
            Our team is made up of dedicated professionals working together to
            ensure seamless delivery experiences for our customers.
          </p>
        )}
      </div>


                 </div>
               </div>
    );
};

export default AboutUs;