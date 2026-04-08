"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Courses = () => {


    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {Array(fullStars).fill(<Icon icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />)}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />}
                {Array(emptyStars).fill(<Icon icon="tabler:star-filled" className="text-gray-400 text-xl inline-block" />)}
            </>
        );
    };

    return (
        <section id="faculties">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-20">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">Our Faculties.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {courseData.map((items, i) => (
    <div
      key={i}
      className="bg-white shadow-course-shadow rounded-2xl p-6 flex flex-col items-center"
    >
      <div className="w-full rounded-xl overflow-hidden">
        <Image
          src={`${getImagePrefix()}${items.imgSrc}`}
          alt={items.heading}
          width={389}
          height={262}
          className="object-cover w-full h-64"
        />
      </div>

      <h3 className="text-2xl font-bold mt-6">{items.heading}</h3>
      <p className="text-gray-700 mt-2 text-center">{items.name}</p>
    </div>
  ))}
</div>
            </div>
        </section>
    );
}

export default Courses;
