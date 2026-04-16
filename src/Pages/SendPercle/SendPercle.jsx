import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcle = () => {
  const {
    register,
    handleSubmit,
    
  } = useForm({
    defaultValues: {
      parcelType: 'Document',
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const inputStyle = "w-full p-3 border border-gray-200 rounded-md outline-none focus:border-blue-400 transition-colors text-sm placeholder-gray-400";
  const labelStyle = "block text-sm font-semibold text-gray-700 mb-1";
  const sectionTitle = "text-lg font-bold text-teal-900 mb-4";

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white font-sans">
      <h1 className="text-3xl font-extrabold text-teal-900 mb-2">Send A Parcel</h1>
      <h2 className="text-xl font-bold text-teal-900 mb-6">Enter your parcel details</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Parcel Type Radio Selection */}
        <div className="flex items-center space-x-8 border-b border-gray-100 pb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              value="Document"
              {...register("parcelType")}
              className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Document</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              value="Not-Document"
              {...register("parcelType")}
              className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Not-Document</span>
          </label>
        </div>

        {/* Top Row: Parcel Name & Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Parcel Name</label>
            <input 
              placeholder="Parcel Name" 
              className={inputStyle}
              {...register("parcelName", { required: true })} 
            />
          </div>
          <div>
            <label className={labelStyle}>Parcel Weight (KG)</label>
            <input 
              placeholder="Parcel Weight (KG)" 
              className={inputStyle}
              {...register("parcelWeight", { required: true })} 
            />
          </div>
        </div>

        {/* Sender and Receiver Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Sender Details */}
          <div className="space-y-4">
            <h3 className={sectionTitle}>Sender Details</h3>
            
            <div>
              <label className={labelStyle}>Sender Name</label>
              <input placeholder="Sender Name" className={inputStyle} {...register("senderName")} />
            </div>

            <div>
              <label className={labelStyle}>Address</label>
              <input placeholder="Address" className={inputStyle} {...register("senderAddress")} />
            </div>

            <div>
              <label className={labelStyle}>Sender Phone No</label>
              <input placeholder="Sender Phone No" className={inputStyle} {...register("senderPhone")} />
            </div>

            <div>
              <label className={labelStyle}>Your District</label>
              <select className={inputStyle} {...register("senderDistrict")}>
                <option value="">Select your District</option>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>Pickup Instruction</label>
              <textarea 
                placeholder="Pickup Instruction" 
                className={`${inputStyle} h-24 resize-none`} 
                {...register("pickupInstruction")}
              />
            </div>
          </div>

          {/* Receiver Details */}
          <div className="space-y-4">
            <h3 className={sectionTitle}>Receiver Details</h3>
            
            <div>
              <label className={labelStyle}>Receiver Name</label>
              <input placeholder="Receiver Name" className={inputStyle} {...register("receiverName")} />
            </div>

            <div>
              <label className={labelStyle}>Receiver Address</label>
              <input placeholder="Address" className={inputStyle} {...register("receiverAddress")} />
            </div>

            <div>
              <label className={labelStyle}>Receiver Contact No</label>
              <input placeholder="Sender Contact No" className={inputStyle} {...register("receiverContact")} />
            </div>

            <div>
              <label className={labelStyle}>Receiver District</label>
              <select className={inputStyle} {...register("receiverDistrict")}>
                <option value="">Select your District</option>
                <option value="dhaka">Dhaka</option>
                <option value="chittagong">Chittagong</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>Delivery Instruction</label>
              <textarea 
                placeholder="Delivery Instruction" 
                className={`${inputStyle} h-24 resize-none`} 
                {...register("deliveryInstruction")}
              />
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="pt-4">
          <p className="text-sm text-gray-600 mb-6 font-medium">
            * PickUp Time 4pm-7pm Approx.
          </p>
          <button 
            type="submit"
            className="bg-[#D4ED6D] hover:bg-[#c4de59] text-gray-800 font-bold py-3 px-8 rounded-lg shadow-sm transition-all"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcle;