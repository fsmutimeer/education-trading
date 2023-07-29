import { enrollCourse } from '@/app/api/api';
import { useRouter } from 'next/navigation';
import React from 'react';

const courseList = ({ id, photo, title, name, enrollCourseHandler }: any) => {

    const router = useRouter();

    const handleEnrollNowClick = async () => {
        await enrollCourseHandler(id);

    };

    return (
        <div className="group relative rounded-lg overflow-hidden bg-white hover:shadow-2xl  w-[250px]">
            <div className="h-40">
                <img
                    src={photo}
                    alt={name}
                    className="h-40 w-full object-cover object-center"
                />
            </div>
            <div className="h-1/2 p-4">
                <h3 className="mb-2 text-base font-semibold text-blue-800">
                    <a href="#" className="hover:underline">
                        {name}
                    </a>
                </h3>
                <p className="text-sm font-bold text-orange-500">{title}</p>
                <div className="flex flex-row justify-between text-xs mt-2">
                    <p>{name}</p>
                    <p>Not Enrolled</p>
                </div>
                <button
                    onClick={handleEnrollNowClick}
                    type="button"
                    className="hover:bg-[#1F2126] transition-all inline-block rounded bg-[#1F2125] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-orange-400 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Enroll Now
                </button>
            </div>

        </div>
    );
};

export default courseList;
