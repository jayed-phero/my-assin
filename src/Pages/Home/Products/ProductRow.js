import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { TbScanEye } from "react-icons/tb";
import ProductDetailsModal from '../../../Components/ProductDetailsModal';
import { toast } from 'react-hot-toast';




const ProductRow = (item) => {
    console.log(item.item)
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

    const { image_url, title, category, price, pre_price, status, star } = item.item;
    const [currentImage, setCurrentImage] = useState(image_url[0]);

    const handleClick = (image) => {
        setCurrentImage(image);
    };

    const toastMake = () => {
        toast.success("Added Product successfully!!!")
    }


    return (
        <div
            className='w-full group relative group-hover:-ml-20 border border-white hover:border-gray-300'
        >
            <div
                className='w-20 absolute h-full  bg-white z-0 left-0 group-hover:-left-20 transition-all duration-500 ease-in-out  flex flex-col p-2 gap-2  group-hover:border-l group-hover:border-gray-300 group-hover:border-b  group-hover:border-t hidden  md:block'
            >
                {
                    image_url.map((image, index) =>
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
                    className='w-full h-36 md:h-72 relative overflow-hidden'
                >
                    {
                        status ?
                            <h3
                                className='bg-green-700 text-white px-3 py-1 absolute top-3 left-3 text-xs'
                            >SALE!</h3>
                            :
                            undefined
                    }
                    <img
                        src={currentImage}
                        className='w-full h-full'
                    />

                    {/* add to cart btn */}

                    <div className='absolute w-full left-0 -bottom-10 group-hover:bottom-0 right-0 transition-all duration-500 ease-in-out'>
                        <div
                            className='flex items-center space-x-3 justify-center w-full bg-red-500 py-1 md:py-2 cursor-pointer'
                            onClick={() => toastMake()}
                        >
                            <BsCartCheck
                                class=" text-xs md:text-lg text-white"
                            />
                            <h4 className=' text-xs md:text-sm text-white'>ADD TO CART</h4>
                        </div>
                    </div>


                    {/* side bar fro details btn */}
                    <div
                        className='absolute top-5 -right-16 group-hover:right-3  md:group-hover:right-5  transition-all duration-500 ease-in-out'
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
                        className='absolute top-16 -right-16 group-hover:right-3  md:group-hover:right-5  transition-all duration-300 ease-in-out'
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
                        className='absolute top-[110px] right-3 opacity-0 group-hover:opacity-100 group-hover:right-5  transition-all duration-300 ease-in-out hidden md:block'
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
                    className='flex items-center flex-col p-[7px] md:p-[15px] bg-white z-50'
                >
                    <h3
                        className=' text-sm md:text-lg text-gray-400'
                    >{category}</h3>

                    <h4
                        className='font-semibold -mt-1 text-sm md:text-md'
                    >{title}</h4>

                    <div
                        className='flex items-center gap-3 pt-2 md:pt-4'
                    >
                        {
                            pre_price ?
                                <p
                                    className='text-gray-600 line-through text-sm md:text-lg font-semibold'
                                >${pre_price}.67</p>
                                :
                                undefined
                        }
                        <p
                            className=' text-sm md:text-lg font-semibold text-red-500'
                        >${price}.67</p>
                    </div>

                    {
                        star ?
                            <div
                                className='flex items-center gap-1 text-yellow-500 mt-1 md:mt-2'
                            >
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            :
                            undefined
                    }
                </div>
            </div>

            {/* product details modal declaration */}
            <ProductDetailsModal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
                item={item}
            />
        </div>
    );
};

export default ProductRow;