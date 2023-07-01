'use client';
import { FaqAccordion } from '@/components';
import React, { useState } from 'react';
import {
  FaBrain,
  FaDollarSign,
  FaHandPointDown,
  FaLaptop,
  FaObjectGroup,
  FaPeopleArrows,
} from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

const faqs = () => {
  const [items, setItem] = useState([
    {
      question: 'Do I need Prior Experience in Trading before joining?',
      answer:
        'this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!this is answer lorem2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit! Im feroz',
      icon: <FaBrain className="text-white w-[30px] h-[30px]" />,
    },
    {
      question: 'How do I know if I was selected to join?',
      answer: 'this is answer',
      icon: <FaObjectGroup className="text-white w-[30px] h-[30px]" />,
    },
    {
      question: 'What Does My TTR Membership Include?',
      answer: 'this is answer',
      icon: <FaPeopleArrows className="text-white w-[30px] h-[30px]" />,
    },
    {
      question: 'What Asset classes are Traded in TTR?',
      answer: 'this is answer',
      icon: <FaLaptop className="text-white w-[30px] h-[30px]" />,
    },
    {
      question: 'What does the TTR Program contain?',
      answer: 'this is answer',
      icon: <FaHandPointDown className="text-white w-[30px] h-[30px]" />,
    },

    {
      question: 'When do the Bootcamps occur & what do they include?',
      answer: 'this is answer',
      icon: <FaBrain className="text-white w-[30px] h-[30px]" />,
    },
  ]);
  return (
    <div className="flex-col bg-[#1F2125] h-auto w-screen flex-wrap">
      <div className=" container mx-auto w-[80%]  flex-col  ">
        <div className="flex flex-wrap pt-[6rem] mx-auto justify-start items-start p-4 md:p-[5rem] pb-8">
          <h2 className="text-white text-4xl md:text-5xl pt-12 p-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-md p-2">
            Quick answers to questions you may have. Can't find what you're
            looking for? DM us on instagram @thetradingroom8
          </p>
        </div>
        {/* The Accordion here */}
        <div className="flex flex-wrap gap-y-3 gap-x-3 justify-start items-start p-4 md:p-[5rem] pt-1">
          {items.map((item, index) => (
            <FaqAccordion items={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default faqs;
