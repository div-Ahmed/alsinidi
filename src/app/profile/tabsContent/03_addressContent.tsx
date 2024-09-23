"use client";

import { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import GlobalContext from "@/code/globalContext";
import { BiPlus, BiSolidPencil, BiSolidTrash } from "react-icons/bi";

const addressSchema = z.object({
  title: z.string().min(1, "Title is required"),
  street: z.string().min(1, "Street is required"),
  building: z.string().min(1, "Building is required"),
  floor: z.string().min(1, "Floor is required"),
  apartment: z.string().min(1, "Apartment is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  country_id: z.string().min(1, "Country is required"),
  latitude: z.string().optional(),
  longitude: z.string().optional(),
  is_default: z.boolean(),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
});

type AddressFormData = z.infer<typeof addressSchema>;

export default function AddressContent() {
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const { user, AllCountries } = useContext(GlobalContext);
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // const [editAddress, setEditAddress] = useState<AddressFormData | null>(null);
  // const [editAddress, setEditAddress] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      is_default: false,
      latitude: "",
      longitude: "",
    }
  });

  const fetchAddresses = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/addresses`, {
        headers: {
          'Authorization': `Bearer ${user.access_token}`
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAddresses(data);
      }
    } catch (error) {
      console.error('Failed to fetch addresses:', error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/addresses/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.access_token}`
        },
      });
      if (response.ok) {
        setMessage({ type: 'success', text: 'Address deleted successfully' });
        fetchAddresses();
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Failed to delete address' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    }
  };
  const handleEdit = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/addresses/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${user.access_token}`
        },
      });
      if (response.ok) {
        const data = await response.json();
        reset(data);
        setShowForm(true);
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Failed to edit address' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const onSubmit = async (data: AddressFormData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/addresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.access_token}`
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Address added successfully' });
        reset();
        fetchAddresses();
        setShowForm(false);
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Failed to add address' });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setMessage({ type: 'error', text: 'An unexpected error occurred' });
    }
  };
  console.log(addresses)
  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">Address Book</h2>
      <span className="text-captionColor text-sm">Manage your addresses</span>

      {message && (
        <div className={`mt-4 p-2 ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded`}>
          {message.text}
        </div>
      )}



      <div className="mt-8">
        <h3 className="text-xl text-blackText font-bold mb-4">Your Addresses</h3>
        {addresses?.length > 0 ? (
          addresses?.map((address: any) => (
            <div key={address.id} className="bg-white p-4 rounded-lg shadow mb-4">
              <p className="font-bold">{address.title}</p>
              <p>{address.street}, {address.city}</p>
              <p>{address.country.name}</p>
              <p>Phone: {address.phone}</p>
              {address.is_default && <p className="text-primary">Default Address</p>}
              <div className="mt-3 flex justify-end text-sm font-medium">
                <button className="text-secondary mx-1 flex items-center" onClick={() => handleEdit(address.id)}>
                  <BiSolidPencil className="mx-1" /> <span>Edit</span>
                </button>
                <button className="text-redColor mx-1 flex items-center" onClick={() => handleDelete(address.id)}>
                  <BiSolidTrash className="mx-1" /> <span>Remove</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm text-captionColor text-center">
            No addresses found
          </div>
        )}
      </div>
      {showForm && (
        <>
          <div className="relative w-full h-full">

            <div onClick={() => setShowForm(!showForm)} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 px-10 py-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg  w-[60%] h-[60%] bg-white z-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("title")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="title" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Title</label>
                  {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("street")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="street" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Street</label>
                  {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("building")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="building" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Building</label>
                  {errors.building && <p className="text-red-500 text-xs mt-1">{errors.building.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("floor")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="floor" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Floor</label>
                  {errors.floor && <p className="text-red-500 text-xs mt-1">{errors.floor.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("apartment")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="apartment" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Apartment</label>
                  {errors.apartment && <p className="text-red-500 text-xs mt-1">{errors.apartment.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("address")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Address</label>
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("city")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="city" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">City</label>
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>

                <div className="relative w-full">
                  <select
                    {...register("country_id")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                  >
                    <option value="">Select a country</option>
                    {AllCountries?.map((country: any) => (
                      <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                  </select>
                  <label htmlFor="country_id" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Country</label>
                  {errors.country_id && <p className="text-red-500 text-xs mt-1">{errors.country_id.message}</p>}
                </div>

                <div className="relative w-full">
                  <input
                    type="tel"
                    {...register("phone")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Phone</label>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="text-center lg:text-end mt-6">
                <button
                  type="submit"
                  className="text-white bg-primary rounded-md px-3 py-2 min-w-[260px]"
                >
                  Add Address
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <div className="flex justify-center lg:justify-end mt-3">
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-primary rounded-md px-3 py-2 mt-3 min-w-[260px] flex items-center justify-center border-2 border-solid border-primary bg-transparent font-medium hover:bg-primary hover:text-white transition-all duration-500 ease-in-out"
        >
          <BiPlus className="mx-1 text-xl" />
          <span className="mx-1">{showForm ? 'Cancel' : 'New Address'}</span>
        </button>
      </div>
    </div>
  );
}
