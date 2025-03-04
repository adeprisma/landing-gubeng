"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ActivitiesData } from '@/app/api/data';
import { Icon } from "@iconify/react";

const Activities = () => {
    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id="activity-section">
                <div className='text-center mb-14' >
                    <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>Kegiatan</p>
                    <h2 className='text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>Dapatkan info kegiatan di GKJW Jemaat Surabaya.</h2>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    {ActivitiesData.map((items, i) => (
                        <div className='p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute -top-[50%] sm:top-[-20%] md:top-[-55%] lg:top-[-20%] left-[26%]'>
                                <Image src="/images/logo/gkjw_surabaya.png" alt='/images/logo/gkjw_surabaya.png' width={150} height={0} />
                            </div>
                            <h3 className='text-2xl text-black dark:text-white font-semibold text-center mt-16'>{items.heading}</h3>
                            <p className='text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2'>{items.subheading}</p>
                            <div className='flex items-center justify-center '>
                                <Link href='/' className='text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'>
                                    Lebih Detail
                                    <Icon
                                        icon="tabler:chevron-right"
                                        width="24"
                                        height="24"
                                        className="text-primary "
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Activities;
