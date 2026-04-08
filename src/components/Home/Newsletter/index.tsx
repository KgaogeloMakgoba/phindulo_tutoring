import { getImagePrefix } from "@/utils/util";
import Image from "next/image";

const Newsletter = () => {
    const isProd = process.env.NODE_ENV === "production";

    return (
        <section id="about">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div className={`col-span-12 ${isProd ? 'bg-newsletter-bg-2' : 'bg-newsletter-bg'} bg-contain bg-no-repeat`}>
                        <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
                            <h3 className="text-4xl md:text-5xl text-center font-semibold text-white mb-3">About Us.</h3>
                            <h3 className="text-base font-bold text-white/95 text-center mb-8">
                                Phindulo was discovered in 2021,and since then we've been transforming lives through education,employment,and character development.With partnerships like Anzisha Price,we are bridging the gap between education and employment.Our community is built on the principles of empowerment,innovation and collaboration.We are proud to have empowered hundreds of students to reach their full potential!From academic support to career guidance,we have helped our students gain confidence in thier abilities,improve thier academic perfomance and develop essential life skills.Also they have secured intenships,job placements and have become leaders in thier communities.Be part of our story and help us create a brighter future for African youth! <br/>#PhinduloJourney#YouthEmpowerment#EducationForEmployment.
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;