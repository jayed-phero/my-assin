import React, { useState } from 'react';
import './Products.css';
import { FaCanadianMapleLeaf } from "react-icons/fa";
import ProductRow from './ProductRow';
import ProductDetailsModal from '../../../Components/ProductDetailsModal';



const Products = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    const images = [
        "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydCUyMG1vY2t1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0JTIwbW9ja3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ]




    return (
        <div className='max-w-6xl px-6 md:px-11 xl:px-0 py-10 mx-auto'>
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white uppercase heading-title">Best Seller</h1>

                <div class="flex justify-center mx-auto items-center">
                    <span class="inline-block w-20 bottom_bdr bg-black rounded-full"></span>
                    <FaCanadianMapleLeaf
                        className='text-lg mx-2'
                    />
                    <span class="inline-block w-20 bottom_bdr bg-black rounded-full"></span>
                </div>

                <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>
            <div
                className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-7'
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, i) =>
                        <ProductRow
                            data={data}
                            key={i}
                            openModal={openModal}
                        />
                    )
                }
            </div>
            <ProductDetailsModal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
            />
        </div>
    );
};

export default Products;