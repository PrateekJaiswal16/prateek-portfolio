'use client'
import React from 'react';
import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader';

const AchievementsSection = () => {

    const { achievements } = data.data;

    return (
        <section id="achievements" className="bg-black text-white py-8">
            <div className="mx-auto px-6 md:px-8 lg:px-16">
                
                <SectionHeader 
                    title={'achievements'} 
                    description={'My accomplishments and recognitions'} 
                />

                {/* This is the "one box" container.
                  - 'max-w-3xl' limits width on large screens.
                  - 'mx-auto' centers it.
                  - 'p-6 md:p-8' provides responsive padding.
                */}
                <div className="mt-12  mx-auto bg-[var(--card-dark)] rounded-lg border border-gray-700/50 p-6 md:p-8">
                    
                    {/* This is the "LaTeX itemize" list.
                      - 'list-disc' adds the bullet points.
                      - 'list-outside' makes them hang on the outside.
                      - 'pl-5' gives the list items room.
                      - 'space-y-3' adds spacing between each item.
                    */}
                    <ul className="list-disc list-outside pl-5 space-y-3">
                        
                        {achievements.map((achievement, index) => (
                            <li 
                                key={index} 
                                className="font-mono text-base font-light text-gray-300 marker:text-[var(--accent)]"
                            >
                                {achievement}
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;