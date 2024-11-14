import React from 'react';
import Navbar, { NavigationMobile } from "@/components/shared/header/nav";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link"

const Header = () => {
    return (
      <div className="container">
        <header className="flex flex-row justify-between items-center">
          <div
            className='flex flex-row md:gap-10 gap-2 items-center max-[400px]:w-full max-[400px]:justify-between max-[400px]:flex-row-reverse'>
            <div className='block md:hidden'>
              <NavigationMobile></NavigationMobile>
            </div>
            <h1 className="font-bold text-2xl">
              Sensei
            </h1>
            <div className='hidden md:block'>
              <Navbar></Navbar>
            </div>
          </div>
          <div className=' flex-row gap-2 items-center flex max-[400px]:hidden'>
            <Button variant={"default"}>
              <Link
                href="/order"
                className="flex flex-row gap-2 items-center text-base font-medium"
              >
                <Image
                  src="/assets/icons/cart.svg"
                  alt="shopping cart"
                  width={18}
                  height={22}
                  className="invert"
                ></Image>
                Shop
              </Link>
            </Button>
            <Button variant={"default"} className="font-medium">
              <Link href="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </header>
      </div>
    )
}

export default Header;