import React from 'react';
import { FaBrain, FaHandshake } from 'react-icons/fa';
import { ImOmega } from 'react-icons/im';
import { MdAutoGraph } from 'react-icons/md';
interface PhaseProps {
  phase: string;
  title: string;
  p1: string;
  p2: string;
  icon: JSX.Element;
}

const PhaseElement = (props: PhaseProps) => {
  return (
    <div className="relative">
      <div className="md:flex items-center md:space-x-4 mb-3">
        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-400 shadow md:order-1"></div>
          <h4 className="font-caveat font-medium text-xl text-white  md:w-28">
            {props.phase}
          </h4>
        </div>

        <div className=" ml-14 flex gap-4 w-[50%] md:w-[100%]">
          {props.icon}
          <h4 className="text-orange-400 ">{props.title}</h4>
        </div>
      </div>
      <div className="bg-transparent p-4 pt-0 ml-[5rem] w-[60%] text-gray-500 shadow md:ml-56 flex-col">
        <p className="text-gray-400 text-sm">{props.p1}</p>
        <p className="text-gray-400 text-sm pt-4">{props.p2}</p>
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="ml-12 md:ml-[8rem] space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <PhaseElement
          phase="Phase I"
          title="INITIATION INTO THE TRADING ROOM."
          p1=" Accustom yourself into the workings of how TTR Members trade &
        operate."
          p2="Understand how you should treat trading & also how to present
        yourself as a member."
          icon={<FaHandshake className="h-12 w-12 text-white" />}
        />

        <PhaseElement
          phase="Phase II"
          title="INTERNALIZING THE ARCHIVE"
          p1="Internalize all the information shared in the Archive. Understand it & identify what style suits you as a trader."
          p2="Every trader is different & thus it is crucial to understand who you are. Reflect & discuss with the team to unveil your true self."
          icon={<ImOmega className="h-12 w-12 text-white" />}
        />

        <PhaseElement
          phase="Phase III"
          title="REAL WORLD APPLICATION"
          p1="After understanding the content as well as the specific style that suits you, its time to enter the real world and get a taste of how the markets operate with your new-found knowledge."
          p2="Back testing is fantastic but remember, nothing beats real experience. We're pattern traders by heart & when they appear we take them without doubting ourselves."
          icon={<MdAutoGraph className="h-12 w-12 text-white" />}
        />
        <PhaseElement
          phase="Phase IV"
          title="MIND MASTERY"
          p1=" By mastering your mind, you gain resilience, overcome biases, and navigate market fluctuations with confidence, fostering consistency and success in your trading journey."
          p2="Back testing is fantastic but remember, nothing beats real experience. We're pattern traders by heart & when they appear we take them without doubting ourselves."
          icon={<FaBrain className="h-12 w-12 text-white" />}
        />
        <PhaseElement
          phase="Phase V"
          title="YOUR METAMORPHOSIS"
          p1="You've now reached the stage where you have an in-depth understanding of both the market & your mind. "
          p2="You're seeing consistency & profitable results. Acquiring funding is now a viable option."
          icon={<FaBrain className="h-12 w-12 text-white" />}
        />
      </div>
    </div>
  );
};

export default TimeLine;
