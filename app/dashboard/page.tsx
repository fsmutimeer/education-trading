'use client';
import React, { useState, useEffect } from 'react';
import { ArchiveCard, WelcomeCard } from '@/components/dashboard';
import { Container } from '@/components';
import Link from 'next/link';
import useAuth from '@/app/auth/useAuth';
import { enrollCourse, getCourseById, getCourses, getEnrolledCourses, getUnEnrolledCourses, getUserProfile } from '../api/api';
import { User, EnrolledCourse, Course } from '../api/types';
import { useRouter } from 'next/navigation';
import CourseList from '@/components/dashboard/Archive/CourseList';

const page = () => {
  useAuth()
  const router = useRouter();

  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [enrolledCourse, setEnrolledCourse] = useState<EnrolledCourse[] | null>(null);


  const [courseList, setCourseList] = useState<Course[] | null>(null);
  const [courseLoading, setCourseLoading] = useState<boolean>(true);
  const [courseError, setCourseError] = useState<Error | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);



  useEffect(() => {
    getUserProfile(router)
      .then((userProfile) => {
        setAuthenticatedUser(userProfile);
      })
      .catch((error) => {
        setError(new Error('Error fetching user profile'));
      });

    getEnrolledCourses(router)
      .then((data) => {
        console.log(data);
        setEnrolledCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(new Error('Error fetching enrolled courses'));
        setLoading(false);
      });
    getUnEnrolledCourses(router)
      .then((data) => {
        setCourseList(data);
        setCourseLoading(false);
      })
      .catch((error) => {
        setCourseError(new Error('Error fetching courses'));
        setCourseLoading(false);
      });


  }, [router])

  const enrollCourseHandler = async (courseId: number) => {
    try {
      await enrollCourse(courseId, router);
      const courseDetails = await getCourseById(courseId, router,);
      setEnrolledCourse((prevEnrolledCourses: any) => {
        if (prevEnrolledCourses) {
          return [...prevEnrolledCourses, courseDetails];
        } else {
          return [courseDetails];
        }
      });

      setCourseList((prevCourseList: any) => {
        if (prevCourseList) {
          return prevCourseList.filter((course: any) => course.id !== courseId);
        } else {
          return [courseDetails];
        }
      });

    } catch (error) {
      console.error('Error enrolling course:', error);
    }
  };
  return (
    <Container>
      <div className="flex pl-4 pb-4">
        <WelcomeCard name={authenticatedUser?.username} />
      </div>
      {courseList !== undefined && courseList !== null && courseList.length > 0 ? <h4 className='text-orange-400 pt-4'>You are not enrolled to the following courses!</h4> : ""}
      <div className="flex flex-wrap gap-4 pt-8 pb-8">
        {courseLoading ? (<div className="text-white">Loading...</div>) :
          courseList !== undefined && courseList !== null && courseList.length > 0 ? (
            courseList?.map(course => <CourseList enrollCourseHandler={enrollCourseHandler} key={course?.id} id={course?.id} photo={course?.photo} title={course?.title} name={course?.name} />)
          ) : (
            ""
          )
        }
      </div>
      <div className="flex pb-4 pl-4 ">
        <h4 className="text-gray-300 text-2xl md:text-3xl">The Archive</h4>
      </div>
      <div className="flex  flex-wrap pl-4 gap-4 justify-between items-center">

        {loading ? (
          <div className="text-white">Loading...</div>
        ) : enrolledCourse !== undefined && enrolledCourse !== null && enrolledCourse?.length > 0 ? (
          enrolledCourse.map((course) => (
            course.name ? (
              <Link
                key={course.courseId}
                className="cursor-pointer"
                href={`/dashboard/${course.name.toLowerCase()}`}
              >
                <ArchiveCard
                  photo={course.photo}
                  name={course.name}
                  title={course.title}
                  progressBar="bg-yellow-500"
                  status="Completed"
                  completionPercentage={course.completionPercentage}
                />
              </Link>
            ) : null
          ))
        ) : (
          <div className="h-screen" ><h1 className="text-orange-400"> No courses enrolled.</h1></div>
        )}
      </div>

    </Container>
  );
};

export default page;
