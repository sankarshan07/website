import React from 'react';
import ProjectCard from "@/components/ProjectCard";
import image from "@/assets/index";

const carouselSettings = {
    autoplay: true,
    wrapAround: true, // Enables infinite looping
    renderCenterLeftControls: null, // Hides previous button
    renderCenterRightControls: null, // Hides next button
    slidesToShow: 1,
};
const Replicas: React.FC = () => {
    const mapTSX = [
        <ProjectCard key={'123'} title={`Twitter`} titleColor={'text-[#1DA1F2]'} glowColor={`bg-[#1DA1F2]`}
                     mainImage={image.twitter} stack={['next', 'tailwind', 'mongodb']}/>,
        <ProjectCard key={'234'} title={`Spotify`} titleColor={'text-[#1DB954]'} glowColor={'bg-[#1DB954]'}
                     mainImage={image.betterspotify}
                     stack={['react', 'redux', 'tailwind', 'typescript']}/>,
        <ProjectCard key={3} title={`Youtube`} titleColor={'text-[#FF0000]'} glowColor={'bg-[#FF0000]'}
                     mainImage={image.youtube}
                     stack={['next', 'nestjs', 'tailwind']}/>,
        <ProjectCard key={4} title={`Booking`} titleColor={'text-[#009fe3]'} glowColor={'bg-[#009fe3]'}
                     mainImage={image.booking}
                     stack={['react', 'sass', 'mongodb', 'nodejs']}/>,
        <ProjectCard key={5} title={`Airbnb`} titleColor={'text-[#FF5A5F]'} glowColor={'bg-[#FF5A5F]'}
                     mainImage={image.airbnb}
                     stack={['next', 'tailwind', 'mongodb']}/>,
                     
        // <ProjectCard key={5} title={'Instagram'}
        //              titleColor={'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'}
        //              glowColor={'bg-[#E1306C]'} mainImage={image.instagram}
        //              stack={['flutter', 'firebase', 'dart']}/>
    ]
    return (
        <div className={'font-Inter '}>


        </div>

    );
};

export default Replicas;
