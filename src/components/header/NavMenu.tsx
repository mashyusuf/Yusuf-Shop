'use client'
import React, { useState, Fragment } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { Dialog, Transition } from '@headlessui/react'

function NavMenu() {
  let [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <div onClick={toggleMenu} className='text-2xl md:hidden text-gray-500 hover:text-blue-500 duration-200 cursor-pointer'>
        <RiMenu3Fill />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[94%] space-y-4  p-6 border border-lightText rounded-md absolute top-10 m-5 bg-black">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold leading-6 text-white"
                  >
                    Navigation Menu
                  </Dialog.Title>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default NavMenu
