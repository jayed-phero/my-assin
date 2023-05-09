import React from 'react';
import { AiFillStar, AiOutlineStar, } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
const ProductRow = () => {
    return (
        <div
            className='w-full group relative cart group-hover:-ml-20 '
        >
            <div
                className='w-20 absolute h-full bg-violet-200 z-0 left-0 group-hover:-left-20 transition-all duration-500 ease-in-out bg'
            >

            </div>
            <div className='w-full hover:-l-20'>
                <div
                    className='w-full h-72 relative overflow-hidden'
                >
                    <h3 
                    className='bg-green-700 text-white px-3 py-1 absolute top-3 left-3 text-xs'
                    >SALE!</h3>
                    <img
                        src='https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                        className='w-full h-full'
                    />

                    <div className='absolute w-full left-0 -bottom-10 group-hover:bottom-0 rifht-0 transition-all duration-500 ease-in-out'>
                        <div
                            className='flex items-center space-x-3 justify-center w-full bg-red-800 py-2 cursor-pointer'
                        >
                            <BsCartCheck
                                class="text-lg text-white"
                            />
                            <h4 className='text-sm text-white'>ADD TO CART</h4>
                        </div>
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
                        className='font-semibold text-md'
                    >Jacket BLue Wash</h4>

                    <div
                        className='flex items-center gap-3 pt-3'
                    >
                        <p
                            className='text-gray-600 line-through text-lg font-semibold'
                        >$35.67</p>
                        <p
                            className='text-lg font-semibold text-red-500'
                        >$35.67</p>
                    </div>

                    <div
                        className='flex items-center gap-1 text-yellow-500'
                    >
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductRow;