// import React, {useState} from 'react';
// import {Title,Project} from "@/components";
// import image from '@/assets'
// import {StaticImageData} from "next/image";
// import {BsCreditCard2Front} from "react-icons/bs";
// import {MdOutlineSettingsApplications} from "react-icons/md";
// import {SiWebpack} from "react-icons/si";

// const carouselSettings = {
//     autoplay: true,
//     wrapAround: true, // Enables infinite looping
//     renderCenterLeftControls: null, // Hides previous button
//     renderCenterRightControls: null, // Hides next button
//     slidesToShow: 1,
// };
// const Projects: React.FC = () => {
//     const [showMore, setShowMore] = useState(false)
//     const [renderProjects, setProjects] = useState('')
//     const [active, setActive] = useState('Replicas')
//     const skills = {
//         'Replicas': <BsCreditCard2Front size={50}/>,
//         'FullStack': <SiWebpack size={50}/>,
//         'Software\'s': <MdOutlineSettingsApplications size={50}/>,
//     }
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
 
//     return (
//         <section id={'project'} className={'  max-w-contentContainer mx-auto  py-24'}>
//             <Title title={'Flagship Projects'} line number={`03.`}/>
//             <Project title={'Tri-Cuisine Savvy'}
//                      mainImage={image.tri as StaticImageData}
//                     //  stack={['react', 'tailwind', 'mongodb', 'nodejs', 'javascript', 'typescript']}
//                      link={'https://tri-cuisine-savvy.netlify.app/'}
//                      github={'#'}
//                      description={'Tri-Cuisine-Savvy, a responsive website implemented using JS HTML CSS. Showcasing a seamless blend of aesthetic appeal and user-friendly functionality.'}
//             />
//             <Project title={'Photography Website '}
//                      reverse={true}
//                      mainImage={image.photo as StaticImageData}
//                     //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
//                      link={'https://desaiphotography.netlify.app/'}
//                      github={'#'}
//                      description={'A single webpage of my personal photography, its user-friendly, responsive and interactive galleries foreasy exploration. Hosted on Netlify'}
                     
//             />

//  {/* 3rd projec  */}
//  <Project title={'Portfolio Template '}
                     
//                      mainImage={image.portfolio as StaticImageData}
//                     //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
//                      link={'https://sankarshan.netlify.app/'}
//                      github={'https://github.com/sankarshan07/Portfolio-Website'}
//                      description={'Portfolio template, Implemented HTML, CSS, JavaScript to create a personal portfolio  website which is responsive for all the devices. Hosted on Netlify.'}
                     
//             />

//  {/* 4th project  */}
//  <Project title={'Image-Background Remover '}
//                      reverse={true}
//                      mainImage={image.remove as StaticImageData}
//                     //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
//                      link={'#'}
//                      github={'#'}
//                      description={'Developed a Python based image background remover tool leveraging libraries such as rembg, PIL. The tool removes background from images, enhancing their versatility for various applications.'}
                     
//             />

                    
           
//         </section>

//     );
// };

// export default Projects;

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
            <Project title={'1.Tri-Cuisine Savvy'}
                     mainImage={image.tri as StaticImageData}
                     stack={['react', 'tailwind', 'mongodb', 'javascript', 'typescript']}
                     link={'https://tri-cuisine-savvy.netlify.app/'}
                     github={'#'}
                     description={'Tri-Cuisine-Savvy, a responsive website implemented using JS HTML CSS. Showcasing a seamless blend of aesthetic appeal and user-friendly functionality.'}
            />
            <Project title={'2.Photography Website '}
                     reverse={true}
                     mainImage={image.photo as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://desaiphotography.netlify.app/'}
                     github={'#'}
                     description={'A single webpage of my personal photography, its user-friendly, responsive and interactive galleries foreasy exploration. Hosted on Netlify'}
                     
            />

 {/* 3rd projec  */}
 <Project title={'3.Portfolio Template '}
                     
                     mainImage={image.portfolio as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://sankarshan.netlify.app/'}
                     github={'https://github.com/sankarshan07/Portfolio-Website'}
                     description={'Portfolio template, Implemented HTML, CSS, JavaScript to create a personal portfolio  website which is responsive for all the devices. Hosted on Netlify.'}
                     
            />

 {/* 4th project  */}
 <Project title={'4.Image-Background Remover '}
                     reverse={true}
                     mainImage={image.remove as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={''}
                     github={''}
                     description={'Developed a Python based image background remover tool leveraging libraries such as rembg, PIL. The tool removes background from images, enhancing their versatility for various applications.'}
                     
            />

{/* 5th project  */}
                     <Project title={'5.Sketchbook '}
                     
                     mainImage={image.skbook as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://real-time-sketchbook.vercel.app/'}
                     github={'https://github.com/sankarshan07/RealTime-Sketchbook.git'}
                     description={'Created a real-time sketchbook web app using Next.js and Socket.IO that lets users draw, erase, and download their sketches seamlessly. It features a dynamic floating color picker for quick color changes and a smooth, responsive interface. All drawing updates sync instantly across connected clients for a collaborative experience.'}
                     
            />

            {/* 6th project  */}
                   <Project title={'6.Real time tracking '}
                     reverse={true}
                     mainImage={image.location as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={''}
                     github={'https://github.com/sankarshan07/realtime-tracking.git'}
                     description={' built a simple real-time tracking backend using Node.js, with an embedded map on the frontend. Live location updates stream instantly to the map for seamless tracking. It’s a lightweight project showing real-time data flow and visualization.'}
                     
            />

            {/* 7th project  */}
              <Project title={'7.Online education '}
                     
                     mainImage={image.netedu as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://netedu.netlify.app/'}
                     github={'https://github.com/sankarshan07/edunet.git'}
                     description={'Built a simple online education website using HTML, CSS, and JavaScript. It features clean layouts for course content, responsive design, and interactive elements for a better learning experience. The project focuses on front-end implementation to present educational materials in an engaging way.'}
                     
            />
            {/* 8th project  */}

            <Project title={'8.Simple Calculator '}
                     reverse={true}
                     mainImage={image.calcu as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://calciilator.netlify.app/'}
                     github={'https://github.com/sankarshan07/codsoft.git'}
                     description={'A simple calculator using HTML, CSS, and JavaScript, mainly focusing on accessing DOM elements and adding functions to perform basic mathematical operations. The interface is clean and responsive for easy use. This project highlights practical JavaScript logic and event handling.'}
                     
            />
            {/* 9th project  */}
            <Project title={'9.Landing Page '}
                     
                     mainImage={image.landingp as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://shoelandingpagee.netlify.app/'}
                     github={'#'}
                     description={'Built a simple real-time tracking backend using Node.js, with an embedded map on the frontend. Live location updates stream instantly to the map for seamless tracking. It’s a lightweight project showing real-time data flow and visualization.'}
                     
            />
            {/* 10th project  */}
               <Project title={'10.floating cards'}
                     reverse={true}
                     mainImage={image.floating as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://todolistbysankarshan.netlify.app/'}
                     github={'#'}
                     description={'Created an interactive UI using Framer Motion to add smooth, floating animations to cards. The animations make the cards feel dynamic and engaging on hover and scroll. It’s a simple project to explore motion design and enhance user experience.'}
                     
            />
            {/* 11th project  */}
             <Project title={'11.To Do List '}
                     
                     mainImage={image.todolist as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'https://todolist-4fd09.web.app/'}
                     github={'#'}
                     description={'To-Do List web app using Next.js with full CRUD operations to add, edit, delete, and view tasks. It features a clean, responsive UI for managing tasks easily. The project showcases practical use of React state, components, and Next.js routing.'}
                     
            />
            {/* 12th project  */}
             <Project title={'12.Wellness vista'}
                     reverse={true}
                     mainImage={image.vista as StaticImageData}
                    //  stack={['nodejs','ec2','kubernetes','docker','mongodb', 'aws', 'typescript']}
                     link={'medicary.netlify.app'}
                     github={'https://github.com/sankarshan07/medcare.git'}
                     description={'Wellness Vista, a hospital landing page using React and Tailwind CSS, and deployed it on Netlify. The design is clean, modern, and fully responsive to showcase hospital services effectively. This project focuses on front-end design and fast, static deployment.'}
                     
            />
        </section>

    );
};

export default Projects;
