'use client'

import Link from "next/link";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useEffect, useState } from "react";
import SignInUpSide from "@/components/sign_in_up_side";
// import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { unstable_noStore as noStore } from 'next/cache';
// import GlobalContext from "@/code/globalContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { setToken, getToken, isAuthenticated, isTokenValid } from "@/lib/auth";
// import Cookies from 'js-cookie';

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional()
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  noStore();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);


  const { register, handleSubmit, formState: { errors }, setError } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("signin")
      setIsLoading(true);

      // Send login request to the API
      const response = await axios.post('https://alsanidi.metatesting.online/public/api/auth/login', {
        email: data.email,
        password: data.password,
      });

      console.log(response.data)

      if (response.status === 200) {
        const userData = response.data;
        toast.success('Login successful');

        // Set the token
        setToken(userData.access_token);
        // Check if the token is set successfully
        if (getToken() === userData.access_token) {
          console.log(getToken())
          // TODO: redirect to the redirect URL or home page
          router.replace(searchParams?.get('redirect') || '/');
        } else {
          console.error('Token was not set successfully');
          toast.error('Failed to set token. Please try again.');
        }
      } else {
        console.error('Login failed:', response.data);
        toast.error('Login failed. Please try again.');
      }
    } catch (error: any) {
      if (error.response?.data?.data) {
        Object.entries(error.response.data.data).forEach(([field, messages]) => {
          if (Array.isArray(messages) && messages.length > 0) {
            setError(field as keyof SignInFormData, { message: messages[0] });
          }
        });
      } else {
        toast.error('Email or password is incorrect');
      }
    } finally {
      setIsLoading(false); // Ensure loading state is reset in both success and error cases
    }
  };
  useEffect(() => {
    const token = getToken();
    if (token) {
      router.push('/' || '/'); // Proceed to profile
    } else {
      router.push(`/sign-in` || '/'); // Redirect to sign-in
    }
  }, [router, searchParams?.get('redirect')]);
  return (
    <main dir="ltr">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 2000 }} />
      <div className="flex flex-wrap">
        <div className="lg:basis-1/2 basis-full bg-bgBrimary lg:min-h-screen">
          <SignInUpSide>
            <div className="pt-8 mb-12">
              <p className="text-sm font-bold text-blackText mb-6">If you don&apos;t have an account with us</p>
              <Link
                href="./sign-up"
                className="text-white bg-primary rounded-md px-3 py-2 w-[180px] cursor-pointer block mx-auto"
              >
                Sign Up
              </Link>
            </div>
          </SignInUpSide>
        </div>
        <div className="lg:basis-1/2 basis-full bg-mainBg lg:min-h-screen py-12 px-3 mx-auto">
          <div className="max-w-[500px] mx-auto">
            <h1 className="text-center text-3xl font-bold text-blackText mb-8">Sign in</h1>
            <div className="flex flex-wrap lg:justify-between justify-center pb-6 mb-6 border-b">
              {/* <button className="mx-3 mb-4" onClick={handleGoogleSignIn}>
                <Image src={signGoogle} alt="Sign in with Google" width={210} />
              </button> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto text-center">
              <div className="mx-auto">
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
                </div>
                <div className="relative flex gap-x-3 mb-4">
                  <div className="flex h-6 items-center">
                    <input
                      id="remember"
                      {...register("remember")}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="remember" className="text-captionColor text-sm">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="block w-full text-white bg-primary rounded-md px-3 py-2"
                  >
                    Sign in
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