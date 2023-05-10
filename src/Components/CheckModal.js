import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiCheckCircle } from "react-icons/fi";
import { BiCheckDouble, BiHeart } from "react-icons/bi";
import { GrClose, GrCloss, GrFormClose } from "react-icons/gr";

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
                                    <div className='p-9 bg-white flex flex-col items-center justify-center'>
                                        <div
                                            className='border-2 border-gray-700 h-9 w-9 rounded-full flex items-center justify-center text-3xl text-gray-700'
                                        >
                                            <BiCheckDouble />
                                        </div>

                                        <h3 
                                        className='text-sm  py-6 text-center'
                                        >Earka pure farka added to wishlist</h3>
                                        <div className="px-5 text-sm 
                                        w-full rounded-3xl bg-red-500 hover:bg-black transition-all duration-300 text-white flex items-center justify-center h-11 cursor-pointer">
                                            <BiHeart
                                                className='text-2xl pr-2 mt-1'
                                            />
                                            <p>VIEW WISHLIST</p>
                                        </div>
                                        <div className="px-5 text-sm 
                                        w-full rounded-3xl bg-red-500 hover:bg-black transition-all duration-300 text-white flex items-center justify-center h-11 mt-3 cursor-pointer"
                                        onClick={closeCheckModal}
                                        >
                                            <p
                                                className=' pr-2 text-xl mb-1'
                                            >x</p>
                                            <p>CLOSE</p>
                                        </div>

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