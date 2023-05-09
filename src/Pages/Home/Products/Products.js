import React from 'react';

const Products = () => {
    return (
        <div className='max-w-7xl px-6 md:px-11 xl:px-0 py-10 mx-auto'>
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">The Executive Team</h1>

                <div class="flex justify-center mx-auto mt-6">
                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>

                <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>
        </div>
    );
};

export default Products;