import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {}

function Faq({ }: Props) {

    
const faq = [
    {
        id: 1,
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!!"
    },
    {
        id: 2,
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!! loreskjagdhasg asy dfsdyf sas dta sf "
    },
    {
        id: 3,
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!! dsadasds   fwe fwesd fsd fsd ds ds fdsf "
    },
    {
        id: 4,
        faq_question: "What will I do If I join",
        faq_answer: "Eaarn and enjoy your life to the fullest!!!!wef ewds fds fds fdsf dsf sdet refer5 34534534"
    }

]


interface Ifaq {
    id: number;
    faq_question: string;
    faq_answer: string;
  };

  const [isOpen, setIsOpen] = useState(false)
    const [ans, setAns] = useState<Ifaq>({id:0,faq_question:'tanuj',faq_answer:'tanuj'})
    const [showModel, setShowModel] = useState(false)

    const buyingCourse = () =>{
        setShowModel(!showModel)
    }
    const handleModel = (id: any) =>{
        setShowModel(!showModel)
        faq.map(f=>(
            f.id == id ? setAns(f): null
        ))
    }

    return (
        <div className='p-3 md:p-6 mt-10'>
                 {
   showModel ? <div className={`top-[30%] md:top-[30%] lg:right-[40%] text-white md:right-[30%] sm:right-[18%] right-[5%]  z-10 ${showModel ? "fixed": "sticky"}`} >
  <div className='sm:scale-125 lg:scale-150  '>
  <div className='flex items-center justify-center bg-gradient-to-r from-gray-700 to-black p-7 lg:p-6 rounded-3xl shadow-2xl border  lg:w-[20vw] md:w-96 w-64'>
        <div className='w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-sm font-bold'>{ans.faq_question}</h2>
            <button className='font-semibold text-md ' onClick={buyingCourse}><AiOutlineClose/></button>
          </div>
          <div className='flex flex-col gap-2 w-full  text-sm text-slate-200 '>
            <div className='py-2    w-full'>
               <h3>{ans.faq_answer}</h3>
            </div >
          </div>
        </div>
  </div>
</div>
</div>: null
}
           <h2 className='text-center text-[32px] text-black font-bold'>FAQ - Frequently Asked Questions</h2>
           <div className='p-4 lg:p-10'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                    {
                        faq.map(f=>(
                            <div className='flex flex-col'>
                            <div className='px-8 py-2 bg-indigo-50 rounded-xl cursor-pointer' onClick={()=>handleModel(f.id)}>
                                <div className='flex items-center justify-between'>
                                    <h3>{f.faq_question}</h3>
                                    <i className='text-3xl'>+</i>
                                </div>
                            </div>
                            {/* <div className={`bg-white border-b border-r border-l p-10 rounded-b-2xl ${isOpen ? 'inline' : "hidden"}`}>{ans}</div> */}
                        </div>
                        ))
                    }
                    {
                        
                    }
                </div>
           </div>
        </div>
    )
}

export default Faq


