import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';

const Hero = () => {

    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6 flex flex-col gap-8 '>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                        </div>
                        <div className='pt-5 lg:pt-0'>
                           <Image
                              src="/images/banner/logo1.png" 
                              alt="Phindulo Tutoring logo"
                              width={350}
                              height={80}
                              priority
                              className="object-contain"
                            />
                    </div>
                        <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>Empowering African youth through education, employment, and character development since 2021.</h3>
                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Empowering</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-6 flex justify-center'>
                        <Image src={`${getImagePrefix()}images/banner/Image2.jpeg`} alt="nothing" width={1000} height={805} />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Hero;
