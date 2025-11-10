'use client'
import React from 'react';
import data from '@/data/data.json'
// 1. Import CertificateCard, NOT ProjectCard
import CertificateCard from './UI/CertificateCard'; 
import SectionHeader from './UI/SectionHeader';

// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CertificatesSection = () => {

    const { certificates } = data.data;

    return (
        // 2. Change section id
        <section id="certificates" className="bg-black text-white py-8">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                {/* 3. Update SectionHeader props */}
                <SectionHeader 
                    title={'certifications'} 
                    description={'My credentials and qualifications'} 
                    linkText={''} 
                    link={''} 
                />

                <div className="project-cards-container px-0 xl:px-10 mt-12">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 5000, // 10s is a bit long, 5s is more standard
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {
                            // 4. Use 'certificate' as the variable
                            certificates.map((certificate, id) => (
                                <SwiperSlide key={id} style={{ height: 'auto' }}>
                                    {/* 5. Render CertificateCard and pass the 'certificate' prop */}
                                    <CertificateCard certificate={certificate} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;