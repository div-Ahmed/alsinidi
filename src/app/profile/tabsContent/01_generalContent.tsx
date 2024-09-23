"use client";

import GlobalContext from "@/code/globalContext";
import G from "@/code/globalData";
import { useSession } from "next-auth/react";
import { useState, useEffect, useContext } from "react";

export default function GeneralContent() {
  const [currentUser, setCurrentUser] = useState(G.session.user);
  const { data: session, status } = useSession();
  const { user, setUser, AllCountries } = useContext(GlobalContext);
  const [userData, setUserData] = useState<{ first_name: string, last_name: string, email: string, country: { name: string, id: string }, phone: string } | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const getUser = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.access_token}`
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setMessage({ type: 'error', text: 'Failed to load user data' });
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const access_token = localStorage.getItem('userToken');
    if (!access_token) {
      setMessage({ type: 'error', text: 'No access token found' });
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/change-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify({
          first_name: userData?.first_name,
          last_name: userData?.last_name,
          email: userData?.email,
          country_id: userData?.country.id,
          phone: userData?.phone,
        })
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Profile updated successfully' });
        getUser(); // Refresh user data
      } else {
        throw new Error('Failed to update profile');
      }
    }
    catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: 'Failed to update profile' });
    }
  };

  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">
        {session?.user?.name}
      </h2>
      <span className="text-captionColor text-sm">
        Customer since {currentUser.createdAt}
      </span>

      {message && (
        <div className={`mt-4 p-2 ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded`}>
          {message.text}
        </div>
      )}

      <form className="mt-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userData?.first_name || ''}
          autoComplete="firstName"
          onChange={(e) => setUserData(prev => prev ? { ...prev, first_name: e.target.value } : null)}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userData?.last_name || ''}
          onChange={(e) => setUserData(prev => prev ? { ...prev, last_name: e.target.value } : null)}
          autoComplete="lastName"
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          value={userData?.email || ''}
          onChange={(e) => setUserData(prev => prev ? { ...prev, email: e.target.value } : null)}
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Email"
        />
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-0 mt-4 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          value={userData?.country?.id || ''}
          onChange={(e) => setUserData(prev => prev ? { ...prev, country: { ...prev.country, id: e.target.value } } : null)}
        >
          {AllCountries?.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="phone"
          id="phone"
          value={userData?.phone || ''}
          onChange={(e) => setUserData(prev => prev ? { ...prev, phone: e.target.value } : null)}
          autoComplete="phone"
          className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="phone"
        />
        <div className="relative flex gap-x-3 pt-3">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="offers" className="text-captionColor text-sm">
              Newsletter
            </label>
          </div>
        </div>
        <div className="text-center lg:text-end">
          <button
            type="submit"
            className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px]"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
