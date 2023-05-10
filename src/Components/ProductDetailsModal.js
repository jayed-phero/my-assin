import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import CheckModal from './CheckModal';
import { GrClose, GrCloss, GrFormClose } from "react-icons/gr";

export default function ProductDetailsModal({ isOpen, openModal, closeModal }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [loader, setLoader] = useState(false);
    const [showText, setShowText] = useState(false);
    let [open, setOpen] = useState(false);

    function closeCheckModal() {
        setOpen(false)
    }

    function openCheckModal() {
        setOpen(true)
    }

    const images =
        [
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        ]

    // console.log(images)

    const listofData = [
        "Recently  desktop publishing",
        "Including versions Lorem Ipsum.",
        "There are many passages",
        "In some form, injected humour,",
        "Including versions  Lorem Ipsum.",
    ]

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        );
    };

    // for bottom indicator
    const handleClick = (index) => {
        setCurrentImageIndex(index);
    };



    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const showBtn = () => {
        setLoader(false)
        setShowText(true);
    }


    // for loading and opening modal
    const loaderFun = () => {
        setLoader(true);
        setTimeout(() => {
            showBtn();
        }, 1000);
    };




    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30 px-5" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >

                                    </Dialog.Title>
                                    <div className="w-full flex items-start gap-5 flex-col md:flex-row pb-5">
                                        <div
                                            className='relative w-full group overflow-hidden'
                                        >
                                            <img src={images[currentImageIndex]} alt="Product"
                                                className='w-full md:h-96 h-56'
                                            />

                                            <div className='flex items-center justify-center'>
                                                <div className="flex items-center gap-2 absolute bottom-5 justify-center">
                                                    {images.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            className={`w-[11px] h-[11px] rounded-full bg-white border-2 border-gray-700 ${index === currentImageIndex ? "bg-blue-500" : ""}`}
                                                            onClick={() => handleClick(index)}
                                                        >

                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div
                                                className=''
                                            >
                                                <button
                                                    onClick={handlePrevious}
                                                    className='absolute top-1/2 -left-11 group-hover:left-5 transition-all ease-in-out duration-300 text-3xl font-bold text-gray-400'
                                                >
                                                    <GrFormPrevious />
                                                </button>
                                                <button
                                                    onClick={handleNext}
                                                    className='absolute top-1/2 -right-11 group-hover:right-5 transition-all ease-in-out duration-300 text-3xl font-bold text-gray-400'
                                                >
                                                    <GrFormNext />
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className='w-full py-5 pr-5 relative'
                                        >
                                            <GrFormClose
                                                onClick={closeModal}
                                                className='absolute right-3 top-3 text-4xl text-gray-600'
                                            />
                                            <h3 className='text-2xl font-semibold mt-3'>Many desktop publishing </h3>

                                            <div
                                                className='flex items-end gap-2 pt-4'
                                            >
                                                <p
                                                    className='text-gray-400 line-through text-md font-semibold'
                                                >$35.67</p>
                                                <p
                                                    className='text-2xl font-semibold text-red-500'
                                                >$35.67</p>
                                            </div>

                                            <div>
                                                <p
                                                    className='text-sm text-gray-500 py-3'
                                                >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>

                                                <div className='flex flex-col gap-1.5'>
                                                    {
                                                        listofData.map((list, i) =>
                                                            <p
                                                                key={i}
                                                                className='text-sm inline text-gray-500 ml-3'
                                                            >
                                                                <TbPointFilled
                                                                    className='text-xl text-gray-700 font-semibold pr-3 inline'
                                                                />
                                                                {list}</p>
                                                        )
                                                    }
                                                </div>

                                                <hr
                                                    className='h-1 mt-4'
                                                />
                                                <div
                                                    className='flex items-center gap-5 mt-5'
                                                >
                                                    <div className='product-details'>
                                                        <div className="quantity-container">
                                                            <button
                                                                className="quantity-button"
                                                                disabled={quantity === 1}
                                                                onClick={handleDecrease}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="quantity">{quantity}</span>
                                                            <button
                                                                className="quantity-button"
                                                                disabled={quantity === 5}
                                                                onClick={handleIncrease}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <button className="px-5 text-md rounded-3xl hover:bg-black bg-red-500 text-white flex items-center justify-center py-1 transition-all duration-300 ease-in-out inline"
                                                        onClick={loaderFun}
                                                    >
                                                        Add to Cart
                                                        {
                                                            loader ?
                                                                <div className="w-3 h-3 border-2 ml-3 border-dashed rounded-full animate-spin border-gray-700 inline"></div>
                                                                :
                                                                undefined
                                                        }
                                                    </button>

                                                    {
                                                        showText ?
                                                            <div
                                                                className='text-xs -ml-2 border-b-2 border-gray-600 hover:text-blue-400 hover:border-blue-400 transition-all ease-in-out duration-300 cursor-pointer'
                                                            >VIEW CART</div>
                                                            :
                                                            undefined
                                                    }
                                                </div>

                                                <div className='mt-3'>
                                                    <h3
                                                        onClick={openCheckModal}
                                                        className='inline text-sm cursor-pointer'
                                                    >
                                                        <AiFillHeart
                                                            className=' inline text-gray-700 pr-2 text-2xl'
                                                        />
                                                        Add to Wishlist
                                                    </h3>
                                                </div>
                                                <hr
                                                    className='h-1 mt-4'
                                                />

                                                <div className='mt-3'>
                                                    <h3 className='text-sm text-black font-semibold'>Category: <span className='text-gray-400'>Men</span></h3>
                                                </div>

                                            </div>
                                        </div>
                                        <CheckModal
                                            open={open}
                                            openCheckModal={openCheckModal}
                                            closeCheckModal={closeCheckModal}
                                        />
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