// components/Breadcrumb.js

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiHomeSmileLine } from 'react-icons/ri';

const Breadcrumb = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return null; // Return null to render nothing when on the home page
  }

  const getPageName = (path: string) => {
    switch (path) {
      case '/profile':
        return 'Profile';
      case '/new_arrivals':
        return 'New Arrivals';
      case '/Branches':
        return 'Branches';
      case '/contact_us':
        return 'Contact Us';
      case '/whole_sale':
        return 'Whole Sale';
      case '/categories':
        return 'Categories';
      case '/search_result':
        return 'Search';
      case '/product':
        return 'Product';
      case '/cart':
        return 'Cart';
      case '/checkout':
        return 'Cart';
      default:
        return '';
    }
  };

  const pathnames = pathname?.split('/').filter((x) => x);

  return (
    <div className="breadcrumb bg-[#ECECEC]">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
        <div className="row-all w-full flex flex-wrap items-center">
          <ul className='flex w-full items-center'>
            <RiHomeSmileLine className='text-2xl text-graySubText' />
            <li className='mx-3 text-graySubText'>
              <Link href="/">Home | </Link>
            </li>
            {pathnames?.map((value, index) => {
              const href = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const name = getPageName(href);
              return isLast ? (
                <li className='text-primary' key={href}>{name}</li>
              ) : (
                <li key={href}>
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
