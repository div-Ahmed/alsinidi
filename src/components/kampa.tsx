import Image from "next/image";
import Kampa1 from "/public/assets/box2.png";
import Kampa2 from "/public/assets/box1.png";
import logoKmpa1 from "/public/assets/logoKampa.png";
import logoKmpa2 from "/public/assets/logoKampa2.png";

const Kampa = () => {
  return (
    <div className="kampa container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
      <div className="row-all w-full flex flex-wrap">
        <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full ">
          <div className="main-kampa shadow-[0_1px_4px_1px] shadow-[#CAC9C9] flex bg-primary overflow-hidden rounded-lg">
            <div className="text-kampa bg-primary xl:basis-1/3 basis-1/2 md:px-6 px-1 text-center">
              <Image
                src={logoKmpa1}
                className="mx-auto max-h-[60px] md:mt-12 mt-3"
                height={60}
                alt="kampa"
              />
              <p className="text-white text-xs md:my-5 my-1 leading-6">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s
              </p>
              <button className="text-sm bg-white text-primary font-normal rounded-md px-3 py-2 mb-12 cursor-pointer">
                Shop Now
              </button>
            </div>
            <div className="img-kampa xl:basis-2/3 basis-1/2">
              <div className="overflow-hidden skewBoxOuter h-[100%]">
                {/* get it straight */}
                <div className="skewBoxInner flex justify-end h-[100%]">
                  <Image
                    src={Kampa1}
                    className="h-[100%]"
                    alt="kampa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full ">
          <div className="main-kampa shadow-[0_1px_4px_1px] shadow-[#CAC9C9] flex bg-primary overflow-hidden rounded-lg">
            <div className="text-kampa bg-primary xl:basis-1/3 basis-1/2 md:px-6 px-1 text-center">
              <Image
                src={logoKmpa2}
                className="mx-auto max-h-[60px] md:mt-12 mt-3"
                height={60}
                alt="kampa"
              />
              <p className="text-white text-xs md:my-5 my-1 leading-6">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s
              </p>
              <button className="text-sm bg-white text-primary font-normal rounded-md px-3 py-2 mb-12 cursor-pointer">
                Shop Now
              </button>
            </div>
            <div className="img-kampa xl:basis-2/3 basis-1/2">
              <div className="overflow-hidden skewBoxOuter h-[100%]">
                {/* get it straight */}
                <div className="skewBoxInner h-[100%] flex justify-end">
                  <Image
                    src={Kampa2}
                    className="h-[100%]"
                    alt="kampa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kampa;
