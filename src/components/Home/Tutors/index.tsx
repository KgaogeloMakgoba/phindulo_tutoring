"use client"
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Mentor = () => {

  const [selectedTutor, setSelectedTutor] = React.useState<any>(null);

  return (
    <section className="bg-deepSlate" id="tutors">
      <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative'>
        
        <h2 className="text-midnight_text text-5xl font-semibold mb-10">
          Meet with our <br /> tutors.
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MentorData.map((mentor, i) => (
            <div 
              key={i}
              onClick={() => setSelectedTutor(mentor)}
              className="group bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
            >
              <Image 
                src={`${getImagePrefix()}${mentor.imgSrc}`} 
                alt={mentor.name} 
                width={150} 
                height={150} 
                className="rounded-full mx-auto" 
              />

              <h3 className="text-xl font-bold text-center mt-4 transition-all duration-500 group-hover:tracking-widest">
                {mentor.name}
              </h3>

              <p className="text-center text-gray-600">
                {mentor.profession}
              </p>

              <p className="text-gray-500 mt-2 text-center">
                {mentor.description}
              </p>
            </div>
          ))}
        </div>

        {/* POPUP */}
        {selectedTutor && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full relative">

              <button
                onClick={() => setSelectedTutor(null)}
                className="absolute top-3 right-3 text-black text-xl"
              >
                ✕
              </button>

              <Image
                src={`${getImagePrefix()}${selectedTutor.imgSrc}`}
                alt={selectedTutor.name}
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />

              <h2 className="text-2xl font-bold text-center mt-4">
                {selectedTutor.name}
              </h2>

              <p className="text-center text-primary">
                {selectedTutor.profession}
              </p>

              <p className="text-gray-600 text-center mt-4">
                {selectedTutor.description}
              </p>
              {selectedTutor.whatsapp && (
                   <a
                     href={`https://wa.me/${selectedTutor.whatsapp}?text=Hi, I’m interested in lessons with ${selectedTutor.name}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block mt-6 bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                     >
                     Contact on WhatsApp
                  </a>
               )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Mentor;