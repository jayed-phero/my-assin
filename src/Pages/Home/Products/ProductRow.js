import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { TbScanEye } from "react-icons/tb";
import ProductDetailsModal from '../../../Components/ProductDetailsModal';




const ProductRow = (openModal) => {
    const [loader, setLoader] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
        setLoading(false)
    }

    // for loading and opening modal
    const loaderFun = () => {
        setLoading(true);
        setTimeout(() => {
            openModal();
        }, 1000);
    };


    const images =
        [
            "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ]

    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleClick = (image) => {
        setCurrentImage(image);
    };


    return (
        <div
            className='w-full group relative group-hover:-ml-20 border border-white hover:border-gray-300'
        >
            <div
                className='w-20 absolute h-full  bg-white z-0 left-0 group-hover:-left-20 transition-all duration-500 ease-in-out  flex flex-col p-2 gap-2  group-hover:border-l group-hover:border-gray-300 group-hover:border-b  group-hover:border-t '
            >
                {
                    images.map((image, index) =>
                        <img
                            key={index}
                            src={image}
                            className='w-full h-16 border-2 border-white hover:border-orange-400 '
                            onClick={() => handleClick(image)}
                        />
                    )
                }
            </div>
            <div className='w-full'>
                <div
                    className='w-full h-44 md:h-72 relative overflow-hidden'
                >
                    <h3
                        className='bg-green-700 text-white px-3 py-1 absolute top-3 left-3 text-xs'
                    >SALE!</h3>
                    <img
                        src={currentImage}
                        className='w-full h-full'
                    />

                    {/* add to cart btn */}

                    <div className='absolute w-full left-0 -bottom-10 group-hover:bottom-0 right-0 transition-all duration-500 ease-in-out'>
                        <div
                            className='flex items-center space-x-3 justify-center w-full bg-red-800 py-2 cursor-pointer'
                        >
                            <BsCartCheck
                                class="text-lg text-white"
                            />
                            <h4 className='text-sm text-white'>ADD TO CART</h4>
                        </div>
                    </div>


                    {/* side bar fro details btn */}
                    <div
                        className='absolute top-5 -right-16 group-hover:right-5  transition-all duration-500 ease-in-out'
                    >
                        <button
                            onClick={() => loaderFun()}
                            className='bg-white h-9 w-9 border hover:border-orange-500 
                            hover:text-orange-500 
                            transition-all duration-300 ease-in-out rounded-full flex items-center justify-center text-xl side_btn'
                        >
                            {
                                isLoading ?
                                    <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-gray-700"></div>
                                    :
                                    <AiOutlineEye />
                            }
                        </button>

                    </div>

                    <div
                        className='absolute top-16 -right-16 group-hover:right-5  transition-all duration-300 ease-in-out'
                    >
                        <button
                            className='bg-white h-9 w-9 border hover:border-orange-500 
                            hover:text-orange-500 
                            transition-all duration-300 ease-in-out rounded-full flex items-center justify-center text-lg side_btn'
                        >
                            <FiHeart />
                        </button>

                    </div>

                    <div
                        className='absolute top-[110px] right-3 opacity-0 group-hover:opacity-100 group-hover:right-5  transition-all duration-300 ease-in-out'
                    >
                        <button
                            className='bg-white h-9 w-9 border hover:border-blue-500 
                            text-blue-500 
                            transition-all duration-300 ease-in-out rounded-full flex items-center justify-center text-lg side_btn'
                        >
                            <TbScanEye />
                        </button>

                    </div>

                </div>

                {/* products info */}
                <div
                    className='flex items-center flex-col p-[15px] bg-white z-50'
                >
                    <h3
                        className='text-lg text-gray-400'
                    >Men</h3>

                    <h4
                        className='font-semibold -mt-1 text-md'
                    >Jacket BLue Wash</h4>

                    <div
                        className='flex items-center gap-3 pt-4'
                    >
                        <p
                            className='text-gray-600 line-through text-lg font-semibold'
                        >$35.67</p>
                        <p
                            className='text-lg font-semibold text-red-500'
                        >$35.67</p>
                    </div>

                    <div
                        className='flex items-center gap-1 text-yellow-500 mt-2'
                    >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                </div>
            </div>

            {/* product details modal declaration */}
            <ProductDetailsModal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
            // images={images}
            />
        </div>
    );
};

export default ProductRow;