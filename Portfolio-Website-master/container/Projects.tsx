import React, {useState} from 'react';
import {Title,Project} from "@/components";
import image from '@/assets'
import {StaticImageData} from "next/image";
import {BsCreditCard2Front} from "react-icons/bs";
import {MdOutlineSettingsApplications} from "react-icons/md";
import {SiWebpack} from "react-icons/si";

const carouselSettings = {
    autoplay: true,
    wrapAround: true, // Enables infinite looping
    renderCenterLeftControls: null, // Hides previous button
    renderCenterRightControls: null, // Hides next button
    slidesToShow: 1,
};
const Projects: React.FC = () => {
    const [showMore, setShowMore] = useState(false)
    const [renderProjects, setProjects] = useState('')
    const [active, setActive] = useState('Replicas')
    const skills = {
        'Replicas': <BsCreditCard2Front size={50}/>,
        'FullStack': <SiWebpack size={50}/>,
        'Software\'s': <MdOutlineSettingsApplications size={50}/>,
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
 
    return (
        <section id={'project'} className={'  max-w-contentContainer mx-auto  py-24'}>
            <Title title={'Flagship Projects'} line number={`03.`}/>
            <Project title={'Tri-Cuisine Savvy'}
                     mainImage={image.tri as StaticImageData}
                    //  stack={['react', 'tailwind', 'mongodb', 'nodejs', 'javascript', 'typescript']}
                     link={'https://tri-cuisine-savvy.netlify.app/'}
                     github={'#'}
                     description={'Tri-Cuisine-Savvy, a responsive website implemented using JS HTML CSS. Showcasing a seamless blend of aesthetic appeal and user-friendly functionality.'}
            />
            <Project title={'Photography Website '}
                     reverse={true}
                     mainImage={image.photo as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://desaiphotography.netlify.app/'}
                     github={'#'}
                     description={'A single webpage of my personal photography, its user-friendly, responsive and interactive galleries foreasy exploration. Hosted on Netlify'}
                     
            />

 {/* 3rd projec  */}
 <Project title={'Portfolio Template '}
                     
                     mainImage={image.portfolio as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://sankarshan.netlify.app/'}
                     github={'https://github.com/sankarshan07/Portfolio-Website'}
                     description={'Portfolio template, Implemented HTML, CSS, JavaScript to create a personal portfolio  website which is responsive for all the devices. Hosted on Netlify.'}
                     
            />

 {/* 4th project  */}
 <Project title={'Image-Background Remover '}
                     reverse={true}
                     mainImage={image.remove as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'#'}
                     github={'#'}
                     description={'Developed a Python based image background remover tool leveraging libraries such as rembg, PIL. The tool removes background from images, enhancing their versatility for various applications.'}
                     
            />

                    
           
        </section>

    );
};

export default Projects;
