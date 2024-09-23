'use client'
import signGoogle from "/public/assets/signGoogle.png";
import Image from "next/image";
import Link from "next/link";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useContext, useState } from "react";
import SignInUpSide from "@/components/sign_in_up_side";
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import GlobalContext from "@/code/globalContext";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().optional()
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(GlobalContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams?.get('returnUrl') || '/';

  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await fetch('https://alsanidi.metatesting.online/public/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        // Store the token in local storage
        if (userData.access_token) {
          localStorage.setItem('userToken', userData.access_token);
          console.log('Token stored in local storage');
        }
        setUser(userData);
        // For this example, we'll use NextAuth's signIn method
        const result = await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (result?.error) {
          console.error(result.error);
        } else {
          router.push(returnUrl);
        }
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        // Handle login errors (e.g., display error messages)
      }

    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signIn('google', {
      redirect: false,
      callbackUrl: returnUrl
    });

    if (result?.error) {
      console.error(result.error);
    } else if (result?.url) {
      router.push(result.url);
    }
  };

  return (
    <main dir="ltr">
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