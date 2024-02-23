import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o', 'u', 't',' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>fegrtjy</p>
                <p>dsfergth</p>
                <p>wdfe</p>
            </div>
        </div>
    )
}

export default About