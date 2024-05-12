"use client";

import { cn } from "@/lib/utils";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { Fragment, useState } from "react";

const products = [
  {
    name: "Book a stay",
    description:
      "Get a better understanding of your traffic",
    href: "",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your clients",
    href: "",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact your support Team",
    description:
      "Get a better understanding of your traffic",
    href: "",
    icon: ChatBubbleLeftIcon,
  },
];

const callStackAction = [
  {
    name: "See Demo Booking",
    href: "",
    icon: PlayCircleIcon,
  },
  { name: "Contact Support", href: "", icon: PhoneIcon },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);
  return (
    <header className="bg-[#013b94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              alt="Booking.com"
              src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
            />
          </Link>
        </div>
        {/* mobile menu */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        {/* mobile menu */}

        {/* popover */}
        <PopoverGroup className="hidden lg:flex lg:space-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm  font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                className="absolute bg-white -left-8 top-full z-10 mt-3 max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-300/50"
                anchor="bottom"
              >
                <div className="p-4">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11  flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <product.icon
                          className=" h-6 w-6 text-[#013b94] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={product.href}
                          className="block font-semibold text=[#013b94]"
                        >
                          {product.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text=[#013b94]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/50 bg-gray-50">
                  {callStackAction.map((action) => (
                    <a
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013b94] hover:bg-gray-100"
                      key={action.name}
                      href={action.href}
                    >
                      <action.icon
                        className="h-5 w-5 flex-none text-[#013b94]"
                        aria-hidden="true"
                      />
                      {action.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Flights
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Car Rentals
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Attractions
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Flight + Hotels
          </a>
        </PopoverGroup>
        {/* popover */}
        {/* login  */}
        <div className="hidden lg:flex-1 lg:flex lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013b94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/50">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <img
                className="h-8 w-auto"
                alt="Booking.com"
                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">close menu</span>
              <XMarkIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          {/* end of header section */}
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        Stays
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180 " : "",
                            "h-5 w-5 flex-none transition-all"
                          )}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[
                          ...products,
                          ...callStackAction,
                        ].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                {/* a tags */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2  text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flight
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2  text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Car Rentals
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2  text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Attractions
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2  text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flight + Hotel
                </a>
                {/* a tags */}
              </div>
              <div>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2.5  text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  href="#"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
