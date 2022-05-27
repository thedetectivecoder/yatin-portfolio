import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { MainSection } from "../Components/MainSection"
import { AboutSection } from '../Components/AboutSection';
import { ProjectSection } from '../Components/ProjectSection';
import { ContactSection } from '../Components/ContactSection';
import { Footer } from '../Components/Footer';



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