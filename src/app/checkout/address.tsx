import { iUserAddress } from "@/code/dataModels";
import { BiPlus } from "react-icons/bi";
const addresses: iUserAddress[] = [
    {
      id: 1,
      streetName: "123 Main St",
      address: "123 Main St, Apple Valley, CA 12345",
      city: "New York",
      country: "USA",
      zipcode: "10001",
      phone: "1234567890",
      isDefault: true,
    },
    {
      id: 2,
      streetName: "456 Main St",
      address: "456 Main St, Apple Valley, CA 12345",
      city: "New York",
      country: "USA",
      zipcode: "10001",
      phone: "1234567890",
      isDefault: false,
    },
  ];
export default function Address({children}: {children?: React.ReactNode}) {
    return (
    <div className="container px-3 mx-auto">
        <h2 className="text-2xl text-blackText font-bold mb-3">Address</h2>
        <form>
            {
                addresses.map((address) => (
                    <div className={`flex gap-x-3 rounded-md border px-3 py-3 mb-3
                    ${address.isDefault ? "bg-bgBrimary border-primary" : "bg-grayColor"}`} key={address.id}>
                        <input
                        id={'address-' + address.id}
                        name="address"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mt-1"
                        defaultChecked={address.isDefault}
                        />
                        <label htmlFor={'address-' + address.id} className="flex-grow cursor-pointer">
                            <div>
                                <h3 className="font-medium text-sm mb-3 text-blackText">{address.streetName}</h3>
                                <p className="text-xs text-blackSubText">{address.address}</p>
                            </div>
                        </label>
                        <button className="text-primary bg-transparent border-none text-sm">
                            Edit
                        </button>
                    </div>
            ))}
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <button
            type="submit"
            className="text-primary rounded-md py-0 flex items-center justify-center md:justify-start border-none bg-transparent font-medium"
            >
            <BiPlus className="mx-1 text-xl" />
            <span className="mx-1">New Address</span>
            </button>
            
            {children}
        </div>
    </div>
    );
}