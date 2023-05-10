import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiCheckCircle } from "react-icons/fi";

export default function CheckModal({ open, openCheckModal, closeCheckModal }) {

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-30 px-5" onClose={closeCheckModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                                <Dialog.Panel className="w-full max-w-[311px] transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >

                                    </Dialog.Title>
                                    <div className='p-9 bg-white'>
                                        <button className="px-5 text-md 
                                        w-full rounded-3xl bg-black text-white flex items-center justify-center py-2">
                                            VIEW WISHLIST
                                        </button>
                                        <button className="px-5 text-md 
                                        mt-3 
                                        w-full rounded-3xl bg-red-500 text-white flex items-center justify-center py-2">CLOSE</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}