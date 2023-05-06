import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-96 2xl:h-[75vh]">
            <Carousel>
                <div className="flex h-full items-center brightness-50 justify-center bg-cover bg-[url('https://i.ibb.co/CV2mN1M/banner1.jpg')]  dark:bg-gray-700 dark:text-white">

                </div>
                <div className="flex h-full items-center brightness-50 justify-centerbg bg-cover bg-[url('https://i.ibb.co/pJTtpRX/banner2.jpg')] dark:bg-gray-700 dark:text-white">

                </div>
                <div className="flex h-full items-center brightness-50 justify-centerbg bg-cover bg-[url('https://i.ibb.co/KFvDsHz/banner3.jpg')] dark:bg-gray-700 dark:text-white">

                </div>
            </Carousel>
        </div>

    );
};

export default Banner;