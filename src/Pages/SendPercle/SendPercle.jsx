import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcle = () => {

  const { register, handleSubmit, watch } = useForm();
  const serviceSenter = useLoaderData();

  // unique regions
  const regions = [...new Set(serviceSenter.map(item => item.region))];

  // watch sender + receiver region
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  // get districts by region
  const districsByRegion = (region) => {
    if (!region) return [];
    const regionDistricts = serviceSenter.filter(item => item.region === region);
    return [...new Set(regionDistricts.map(item => item.district))];
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const inputStyle = "w-full p-3 border border-gray-200 rounded-md outline-none focus:border-blue-400 transition-colors text-sm placeholder-gray-400";
  //const labelStyle = "block text-sm font-semibold text-gray-700 mb-1";
  const sectionTitle = "text-lg font-bold text-teal-900 mb-4";

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white font-sans">
      <h1 className="text-3xl font-extrabold text-teal-900 mb-2">Send A Parcel</h1>
      <h2 className="text-xl font-bold text-teal-900 mb-6">Enter your parcel details</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Parcel Type */}
        <div className="flex items-center space-x-8 border-b border-gray-100 pb-6">
          <label className="flex items-center cursor-pointer">
            <input type="radio" value="Document" {...register("parcelType")} />
            <span className="ml-2">Document</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input type="radio" value="Not-Document" {...register("parcelType")} />
            <span className="ml-2">Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input placeholder="Parcel Name" className={inputStyle} {...register("parcelName", { required: true })} />
          <input placeholder="Parcel Weight (KG)" className={inputStyle} {...register("parcelWeight", { required: true })} />
        </div>

        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

          {/* Sender */}
          <div className="space-y-4">
            <h3 className={sectionTitle}>Sender Details</h3>

            <input placeholder="Sender Name" className={inputStyle} {...register("senderName")} />
            <input placeholder="Address" className={inputStyle} {...register("senderAddress")} />
            <input placeholder="Phone" className={inputStyle} {...register("senderPhone")} />

            {/* Sender Region */}
            <select className={inputStyle} {...register("senderRegion")}>
              <option value="">Select Region</option>
              {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
            </select>

            {/* Sender District */}
            <select className={inputStyle} {...register("senderDistrict")}>
              <option value="">Select District</option>
              {districsByRegion(senderRegion).map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>

            <textarea placeholder="Pickup Instruction" className={`${inputStyle} h-24`} {...register("pickupInstruction")} />
          </div>

          {/* Receiver */}
          <div className="space-y-4">
            <h3 className={sectionTitle}>Receiver Details</h3>

            <input placeholder="Receiver Name" className={inputStyle} {...register("receiverName")} />
            <input placeholder="Address" className={inputStyle} {...register("receiverAddress")} />
            <input placeholder="Contact" className={inputStyle} {...register("receiverContact")} />

            {/* Receiver Region */}
            <select className={inputStyle} {...register("receiverRegion")}>
              <option value="">Select Region</option>
              {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
            </select>

            {/* Receiver District */}
            <select className={inputStyle} {...register("receiverDistrict")}>
              <option value="">Select District</option>
              {districsByRegion(receiverRegion).map((d, i) => (
                <option key={i} value={d}>{d}</option>
              ))}
            </select>

            <textarea placeholder="Delivery Instruction" className={`${inputStyle} h-24`} {...register("deliveryInstruction")} />
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="bg-[#D4ED6D] px-8 py-3 rounded-lg font-bold">
          Confirm Booking
        </button>

      </form>
    </div>
  );
};

export default SendParcle;