import { ReactNode } from "react";
import Image from "next/image";
import Group from "/public/assets/Group.png";
const SignInUpSide = ({
  children,
}: {
  children?: ReactNode;
}) => {
  return (
    <div className="h-full flex items-center text-center justify-center">
        <div className="py-8">
            <Image src="/assets/logo-en.png" alt="logo" width={120} height={60} className="mx-auto" />
            <p className="text-sm text-captionColor font-normal pt-3">Welcome to ALSANIDI store</p>
            {children && children} {/* Optional Slot */}
            
            <Image src={Group} alt="group" className="lg:max-w-[500px]  mx-auto mt-12 pt-12" />

            <button className="text-sm bg-transparent border border-primary text-primary font-normal rounded-md px-3 py-2 min-w-[120px] mt-12">AR</button>
        </div>
    </div>
  );
};

export default SignInUpSide;