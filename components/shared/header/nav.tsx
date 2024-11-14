"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";

import navs from "@/constants/navigation"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"


export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navs.map((navItem, index) => (
          <NavigationMenuItem key={index}>
            {"nav" in navItem ? (
              <>
                <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {navItem.nav.map((component) => (
                            <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            >
                            {component.description}
                            </ListItem>
                        ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={navItem.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navItem.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export const NavigationMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">menu</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-3xl font-bold">Navigation</SheetTitle>
          <SheetDescription className="text-sm">
            Select a section to explore.
          </SheetDescription>
        </SheetHeader>
        <ul>
          {navs.map((navItem, index) => (
            "nav" in navItem ? (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{navItem.title}</AccordionTrigger>
                  <AccordionContent>
                      <ul className="pl-2 border-l-2 border-gray-200 ml-4">
                        {navItem.nav.map((subItem) => (
                          <li key={subItem.title}>
                            <Link href={subItem.href} className="block p-2">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <li key={index}>
                <Link href={navItem.href} className="block py-2">
                  {navItem.title}
                </Link>
              </li>
            )
          ))}
        </ul>
        <SheetFooter className="mt-4">
            <div className=' flex-row gap-2 items-center hidden max-[400px]:flex'>
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
