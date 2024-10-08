"use client";

import Link from "next/link";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useEffect, useState } from "react";
import SignInUpSide from "@/components/sign_in_up_side";
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const signUpSchema = z.object({
  first_name: z.string().min(2, "Name must be at least 2 characters"),
  last_name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 characters"),
  country_id: z.number(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  password_confirmation: z.string(),
  newsletter: z.boolean().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  })
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords don't match",
  path: ["password_confirmation"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [countrys, setCountrys] = useState([]);
  const router = useRouter();

  const { register, handleSubmit, setError, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema)
  });
  const getCountrys = async () => {
    const response = await axios.get('https://alsanidi.metatesting.online/public/api/countries', {
      headers: {
        'X-LOCALE': 'en',
      }
    });
    setCountrys(response.data);

  }
  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await axios.post('https://alsanidi.metatesting.online/public/api/auth/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success('Registration successful!');
        router.push('/sign-in');
      } else {
        console.error('Registration failed with status:', response.status);
        toast.error('Registration failed. Please try again.');
      }
    } catch (error: any) {
      if (error.response?.data?.data) {
        Object.entries(error.response.data.data).forEach(([field, messages]) => {
          if (Array.isArray(messages) && messages.length > 0) {
            setError(field as keyof SignUpFormData, { message: messages[0] });
          }
        });
      } else {
        toast.error(error.message);
      }
    }
  };

  // const handleGoogleSignUp = async () => {
  //   const result = await signIn('google', {
  //     redirect: false,
  //     callbackUrl: returnUrl
  //   });

  //   if (result?.error) {
  //     console.error(result.error);
  //   } else if (result?.url) {
  //     router.push(result.url);
  //   }
  // };
  useEffect(() => {
    (async () => {
      await getCountrys();
    })();
  }, []);

  return (
    <main dir="ltr">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap">
        <div className="lg:basis-1/2 basis-full bg-bgBrimary lg:min-h-screen">
          <SignInUpSide>
            <div className="pt-8 mb-12">
              <p className="text-sm font-bold text-blackText mb-6">If you already have an account with us</p>
              <Link
                href={"/auth/sign-in"}
                className="text-white bg-primary rounded-md px-3 py-2 w-[180px] cursor-pointer block mx-auto"
              >
                Login
              </Link>
            </div>
          </SignInUpSide>
        </div>
        <div className="lg:basis-1/2 basis-full bg-mainBg lg:min-h-screen py-12 px-3 mx-auto">
          <div className="max-w-[500px] mx-auto">
            <h1 className="text-center text-3xl font-bold text-blackText mb-8">Sign up</h1>
            <div className="flex flex-wrap lg:justify-between justify-center pb-6 mb-6 border-b">
              {/* <button className="mx-3 mb-4" onClick={handleGoogleSignUp}>
                <Image src={signGoogle} alt="Sign up with Google" width={210} />
              </button> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto text-center">
              <div className="mx-auto">
                <div className="flex flex-wrap justify-between">
                  <div className="relative w-full mb-4">
                    <input
                      type="text"
                      {...register("first_name")}
                      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                      placeholder=""
                    />
                    <label htmlFor="first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">First Name</label>
                    {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                  </div>
                  <div className="relative w-full mb-4">
                    <input
                      type="text"
                      {...register("last_name")}
                      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                      placeholder=""
                    />
                    <label htmlFor="last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Last Name</label>
                    {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
                  </div>
                </div>
                <div className="relative w-full mb-4">
                  <input
                    type="email"
                    {...register("email")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Email</label>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="relative w-full mb-4">
                  <input
                    type="tel"
                    {...register("phone")}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                    placeholder=""
                  />
                  <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Phone</label>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="relative w-full mb-4">
                  <select
                    {...register("country_id", { valueAsNumber: true })}
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                  >
                    <option value="">Select a country</option>
                    {countrys.map((country: any) => (
                      <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                  </select>
                  <label htmlFor="country_id" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Country</label>
                  {errors.country_id && <p className="text-red-500 text-xs mt-1">{errors.country_id.message}</p>}
                </div>
                <div className="border-b border-t pt-4 mb-4">
                  <div className="relative w-full mb-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                      placeholder=""
                    />
                    <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Password</label>
                    <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 flex items-center p-3.5 z-10">
                      {showPassword ? <PiEye /> : <PiEyeClosed />}
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                  </div>
                  <div className="relative w-full mb-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password_confirmation")}
                      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white dark:border-gray-600 peer peer-focus:ring-1 peer-focus:ring-primary"
                      placeholder=""
                    />
                    <label htmlFor="password_confirmation" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-mainBg dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Confirm Password</label>
                    <div role="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 flex items-center p-3.5 z-10">
                      {showPassword ? <PiEye /> : <PiEyeClosed />}
                    </div>
                    {errors.password_confirmation && <p className="text-red-500 text-xs mt-1">{errors.password_confirmation.message}</p>}
                  </div>
                </div>
                <div className="relative flex gap-x-3 mb-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="newsletter"
                      {...register("newsletter")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="newsletter" className="text-captionColor text-sm">
                      Newsletter
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3 mb-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="agreeTerms"
                      {...register("agreeTerms")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="agreeTerms" className="text-captionColor text-sm">
                      I have read and agree to the <Link href="#" className="text-primary underline">Terms & Conditions</Link>
                    </label>
                  </div>
                </div>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeTerms.message}</p>}
                {/* {error && <p className="text-red-500 text-xs mt-1">{error}</p>} */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="block w-full text-white bg-primary rounded-md px-3 py-2"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}