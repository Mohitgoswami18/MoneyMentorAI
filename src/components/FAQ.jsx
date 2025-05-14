import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

function FAQSection() {
   
    const faqs = [
        {
            question: 'What is Money Mentor AI?',
            answer: 'Money Mentor AI is an intelligent platform that helps you set and achieve your financial goals with personalized advice and tracking.'
        },
        {
            question: 'How does Money Mentor AI work?',
            answer: 'The platform uses AI algorithms to analyze your financial data and offers insights, tips, and progress tracking to help you meet your financial targets.'
        },
        {
            question: 'Is my data secure on this platform?',
            answer: 'Yes, we prioritize your privacy. We use the latest encryption methods to ensure your data is safe and secure.'
        },
        {
            question: 'Can I connect my bank account to track expenses?',
            answer: 'Yes, Money Mentor AI allows you to link your bank account securely for automated expense tracking and goal setting.'
        },
        {
            question: 'Is the platform free to use?',
            answer: 'Money Mentor AI offers a free version with basic features, and a premium version with advanced features and personalized recommendations.'
        }
    ];

    const[active, setActive] = useState(Array(5).fill('false'));

    function EventHandler (idx) {
        let newArray = [...active];
        if(newArray[idx] === 'true') {
            newArray[idx] = 'false';
        } else {
            newArray[idx] = 'true';
        }
        setActive(newArray);
    }

    const { ref, inView } = useInView ({
    triggerOnce:false,
    threshold:0,
  })

    return (
        <motion.section className='max-w-[1080px] mx-auto font-[Poppins] text-[#F3F4F6]'
        ref= {ref}
    initial = {{opacity:0, scale:0.85}}
    animate = {inView ? { opacity:1, scale:1 } : {}}
    transition={{duration:1.25, ease:'anticipate'}}>
            <div className='h-2 w-full border-b-[0.5px] border-b-[#374151]'></div>
            <h1 className='mt-10 text-center font-bold text-3xl'>FAQ'S</h1>

            <div>
            {
                faqs.map((elem, idx) => (
                    <div id={idx} className='ring-gray-700 justify-between  flex ring-2  px-5 py-3 items-center max-w-[800px] mx-auto rounded-2xl m-3 bg-gray-800'>
                        <div>
                        <h1 className='font-bold text-lg' > {elem.question}</h1>
                        <br />
                        <div className='text-[#8B949E]'>
                        {
                            active[idx] === 'true' ? elem.answer : <div></div>
                        }
                        </div>
                        </div>
                        <button className='font-bold cursor-pointer text-2xl'
                        onClick={ () => EventHandler(idx)}> {active[idx]==='true' ? '-' : '+'}  </button>
                    </div>
                ))
            }
            </div>
        </motion.section>
    );
}

export default FAQSection;
