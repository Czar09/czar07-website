import { motion } from 'framer-motion'
import React, { useState } from 'react'

type Props = {}

function Faq({ }: Props) {

    const [isOpen, setIsOpen] = useState(0)
    return (
        <div className='px-6'>
            <div className='container mx-auto my-24 text-center'>
                <span className='text-3xl text-gray-900'>FAQs</span>
            </div>


            <div className='container -mt-3 rounded-lg border-gray-200 shadow-sm border mx-auto py-10 px-6'>

                {faq.map((item, index) => (
                    <div className='border-t last:border-b py-5  border-gray-300' key={index}>
                        <button type='button' className='flex w-full justify-between items-center' onClick={() => { setIsOpen(isOpen == index ? -1 : index) }}>
                            <div className='font-medium text-gray-900 text-lg'>
                                {item.faq_question}
                            </div>
                            <div>
                                {isOpen == index ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    ) :
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>)
                                }
                            </div>
                        </button>
                        <motion.div initial={{ y: -100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1, y: 1 }}
                            className={`${isOpen == index ? 'block' : 'hidden'} + text-gray-400 py-6 leading-relaxed`}>
                            {item.faq_answer}
                        </motion.div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Faq



const faq = [
    {
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!!"
    },
    {
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!!"
    },
    {
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!!"
    },
    {
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!!"
    }

]