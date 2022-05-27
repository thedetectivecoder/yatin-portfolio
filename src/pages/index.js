import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/index.js';
import Navbar from '../components/Navbar/index.js';
import { MainSection } from "../components/MainSection/index.js"
import { AboutSection } from '../components/AboutSection/index.js';
import { ProjectSection } from '../components/ProjectSection/index.js';
import { ContactSection } from '../components/ContactSection/index.js';
import { Footer } from '../components/Footer/index.js';



const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen= {isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>   
            <MainSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
            <Footer></Footer>
        </>
    )
}

export default Home