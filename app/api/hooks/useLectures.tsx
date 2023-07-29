"use client"
import { useState, useEffect } from 'react';
import { AccordionData, Video } from '@/app/api/types';
import { getCourseLecturesById, getCourses } from '@/app/api/api';
import { useRouter } from 'next/navigation';

interface UseLecturesProps {
    PageName: string;
}
const useLectures = ({ PageName }: UseLecturesProps) => {
    const router = useRouter()
    const [lectures, setLectures] = useState<AccordionData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        getCourses(router)
            .then((data) => {
                const forexCourse = data?.find((item) => item.name.toLowerCase() === PageName);
                if (forexCourse) {
                    getCourseLecturesById(forexCourse.id, router)
                        .then((lecturesData) => {
                            if (lecturesData !== undefined) {
                                const accordionData: any = lecturesData?.map((lecture: any) => ({
                                    title: lecture.name,
                                    active: 0,
                                    videos: lecture.videos.map((video: Video) => ({
                                        id: video.id,
                                        title: video.name,
                                        duration: video.videoLength,
                                        videoFile: video.url,
                                        isActive: false,
                                    })),
                                }));
                                setLectures(accordionData);
                            } else {
                                setError('No lectures found ');
                            }
                            setLoading(false);
                        })
                        .catch((error) => {
                            setError('Error fetching enrolled courses');
                            setLoading(false);
                        });
                } else {
                    setError('Forex course not found');
                    setLoading(false);
                }
            })
            .catch((error) => {
                setError('Error fetching courses');
                setLoading(false);
            });
    }, [PageName]);

    return { lectures, loading, error };
};

export default useLectures;
