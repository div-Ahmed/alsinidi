
import { BsEnvelope, BsFillTelephoneFill } from "react-icons/bs";
import { BiCurrentLocation, BiLogoFacebook, BiLogoTelegram, BiLogoTwitter, BiLogoWhatsapp } from "react-icons/bi";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main dir="ltr">
    <div className="container mx-auto px-3 md:px-6 py-12">
      <div className="flex flex-wrap">
        <div className="lg:w-[38%] w-full mb-3">
          <h2 className="text-2xl text-blackText font-bold mb-1">Contact us</h2>
          <div className="bg-bgBrimary flex flex-wrap items-center justify-center lg:justify-start p-3 rounded-lg mt-6 text-primary">
            <BsFillTelephoneFill className="text-xl" />
            <p className="mx-3">Telephone : 8004420000</p>
          </div>
          <div className="bg-bgBrimary flex flex-wrap items-center justify-center lg:justify-start p-3 rounded-lg mt-6 text-primary">
            <BsEnvelope className="text-xl" />
            <p className="mx-3">alsanidi@alsanidi.com</p>
          </div>
          <div className="bg-bgBrimary flex flex-wrap items-center justify-center lg:justify-start p-3 rounded-lg mt-6 text-primary">
            <BiCurrentLocation className="text-xl" />
            <p className="mx-3">Kingdom of Saudi Arabia - Qassim - Buraidah</p>
          </div>
          <div className="my-6 flex justify-center lg:justify-start">
            <Link href="/" className="text-3xl text-captionColor hover:text-primary" >
              <BiLogoWhatsapp/>
            </Link>
            <Link href="/" className="text-3xl text-captionColor hover:text-primary" >
              <BiLogoFacebook/>
            </Link>
            <Link href="/" className="text-3xl text-captionColor hover:text-primary" >
              <BiLogoTwitter/>
            </Link>
            <Link href="/" className="text-3xl text-captionColor hover:text-primary" >
              <BiLogoTelegram/>
            </Link>
          </div>
        </div>
        <div className="lg:w-[10%] hidden lg:block min-h-full">
          <div className="w-[1px] bg-lightGrayColor mx-auto min-h-full"></div>
        </div>
        <form className="lg:w-[52%] w-full">
          <div className="mx-auto">
            <div className="flex flex-wrap justify-between">
              <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="lg:w-[49%] w-full mb-6 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Your Name"
                />
              <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="lg:w-[49%] w-full mb-6 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
            </div>
            <textarea
              id="about"
              name="about"
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              defaultValue={''}
              placeholder="Enquiry"
            />
            <div className="text-center lg:text-end mt-3">
              <button
                type="submit"
                className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px]"
              >
                Done
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
  );
}