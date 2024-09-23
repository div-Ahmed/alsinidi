
export default function WholeSale() {
  return (
    <main dir="ltr">
      <div className="container mx-auto px-3 md:px-6 py-6">
        <form className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl text-blackText font-bold mb-1">
            Request to contact wholesale sales
          </h2>
          <p className="text-captionColor text-sm mt-4 mb-6">
            This form is intended for wholesale and corporate sales. Please
            provide contact information and the Al Sanidi Company wholesale team
            will be happy to contact you as soon as possible.
          </p>
          <div className="mx-auto">
            <div className="flex flex-wrap justify-between">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="lg:w-[49%] w-full mb-3 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Your Name"
              />
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="lg:w-[49%] w-full mb-3 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="phone"
              className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Your Phone"
            />
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              defaultValue={""}
              placeholder="Enquiry"
            />
            <div className="text-center mt-3">
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
    </main>
  );
}
