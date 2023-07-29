import { Course, CreateLecture, CreateUser, EnrolledCourse, Lecture, Login, UpdateLecture, UpdateUser, User, } from "./types";

const BASE_URL = "http://localhost:8888"

// User
export const registerUser = async (
  username: string,
  email: string,
  phone: string,
  password: string,
): Promise<any | null> => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
        first_name: "",
        last_name: "",
      }),
    });
    return res;
  } catch (error) {
    console.error('Error adding new user:', error);
    return null;
  }
};
export const userLogin = async (
  username: string,
  password: string,
  router: any
): Promise<any | null> => {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    // if (!res.ok) {
    //   // If the login request fails, parse the error message from the response
    //   const errorData = await res.json();
    //   const errorMessage = errorData?.message || 'Login failed';
    //   throw new Error(errorMessage);

    // }
    return res;

  } catch (error: any) {
    console.error('Error logging:', error);
    throw new Error(error);
  }
};
export const updateUser = async (
  email: string,
  first_name: string,
  last_name: string,
  phone: string,
  router: any
): Promise<UpdateUser | null> => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('phone', phone);
    const res = await fetch(`${BASE_URL}/users`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
      body: formData,
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const result: any = await res.json();
    return result;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
};
export const getUserProfile = async (router: any): Promise<User | null> => {
  try {
    const res = await fetch(`${BASE_URL}/users/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const userProfile: User = await res.json();
    return userProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}
export const getUsers = async (
  router: any
): Promise<User[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }
    const result: User[] = await res.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
export const deleteUser = async (
  id: number,
  router: any
): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }
    const result: any = await res.json();
    return result;

  } catch (error) {
    console.error('user cant be deleted:', error);
  }
};
export const getUserDetails = async (
  id: number,
  router: any
): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }
    const result: any = await res.json();
    return result;

  } catch (error) {
    console.error('user cant be fetched:', error);
  }
};


// Get Single Course
export const addNewCourse = async (
  name: string,
  title: string,
  file: File,
  router: any
): Promise<any | null> => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('file', file);

    const res = await fetch(`${BASE_URL}/course`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
      body: formData,
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const newCourse: any = await res.json();
    return newCourse;
  } catch (error) {
    console.error('Error adding new course:', error);
    return null;
  }
};
export const getCourses = async (router: any
): Promise<Course[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/course`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });
    // if (!res.ok) {
    //   console.log(res)
    //   // router.push('/login');
    //   return null;
    // }
    if (res.status === 401) {
      router.push('/login');
      return null;
    }
    if (res.status === 403) {
      router.push('/login')
      return null;
    }
    const result: Course[] = await res.json();
    console.log(result)

    return result;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return null;
  }
};

export const getCourseById = async (
  id: number,
  router: any
): Promise<Course | null> => {
  try {
    const res = await fetch(`${BASE_URL}/course/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const course: Course = await res.json();
    return course;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
};
export const getCourseLecturesById = async (
  id: number,
  router: any
): Promise<Lecture[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/course/${id}/lectures`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }
    // if (res.status === 403) {
    //   router.push('/login');
    // }

    const result: Lecture[] = await res.json();
    return result;
  } catch (error: any) {
    console.error('Error fetching course:', error);
    throw new Error(error.message);
  }
};
export const updateCourse = async (
  id: number,
  name: string,
  title: string,
  file: File,
  router: any
): Promise<any | null> => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('file', file);

    const res = await fetch(`${BASE_URL}/course/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
      body: formData,
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const updatedCourse: any = await res.json();
    return updatedCourse;
  } catch (error) {
    console.error('Error updating course:', error);
    return null;
  }
};
export const deleteCourse = async (
  id: number,
  router: any
): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}/course/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

  } catch (error) {
    console.error('course cant be deleted:', error);
  }
};

// Enrollment 
export const enrollCourse = async (
  courseId: number,
  router: any
): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}/enrollments/enroll/${courseId}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

    // Course enrolled successfully
    // You can perform any actions needed after successful enrollment
  } catch (error) {
    console.error('Error enrolling course:', error);
  }
};
export const unenrollCourse = async (
  courseId: number,
  router: any
): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}/enrollments/un-enroll/${courseId}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

    // Course un-enrolled successfully
    // You can perform any actions needed after successful un-enrollment
  } catch (error) {
    console.error('Error un-enrolling course:', error);
  }
};
export const getEnrolledUsers = async (
  courseId: number,
  router: any
): Promise<User[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/enrollments/enrolled-users/${courseId}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
      return null;
    }

    const enrolledUsers: User[] = await res.json();
    return enrolledUsers;
  } catch (error) {
    console.error('Error fetching enrolled users:', error);
    return null;
  }
};
export const getEnrolledCourses = async (
  router: any
): Promise<EnrolledCourse[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/enrollments/enrolled/courses`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
      return null;
    }
    const enrolledCourses: EnrolledCourse[] = await res.json();
    return enrolledCourses;
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    return null;
  }
};
export const getUnEnrolledCourses = async (
  router: any
): Promise<Course[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/enrollments/un-enrolled/courses`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
      return null;
    }
    const enrolledCourses: Course[] = await res.json();
    return enrolledCourses;
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    return null;
  }
};
export const updateEnrollmentPercentage = async (
  enrollmentId: number,
  completetionPercentage: number,
  router: any
): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}/enrollments/update/${enrollmentId}/percentage/${completetionPercentage}`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

    // Enrollment percentage updated successfully
    // You can perform any actions needed after successful update
  } catch (error) {
    console.error('Error updating enrollment percentage:', error);
  }
};

// Lectures
export const addLecture = async (
  name: string,
  courseId: number,
  router: any
): Promise<CreateLecture | null> => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('course', courseId.toString()); // Convert courseId to string

    const res = await fetch(`${BASE_URL}/lectures`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
      body: formData,
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const result: CreateLecture = await res.json();
    return result;
  } catch (error) {
    console.error('Error adding new lecture:', error);
    return null;
  }
};
export const getLectureById = async (
  id: number,
  router: any
): Promise<Lecture | null> => {
  try {
    const res = await fetch(`${BASE_URL}/lectures/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const result: Lecture = await res.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
export const updateLecture = async (
  id: number,
  name: string,
  router: any
): Promise<UpdateLecture | null> => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    const res = await fetch(`${BASE_URL}/lectures/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
      body: formData,
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const result: UpdateLecture = await res.json();
    return result;
  } catch (error) {
    console.error('Error adding new lecture:', error);
    return null;
  }
};
export const deleteLecture = async (
  id: number,
  router: any
): Promise<Object | null> => {
  try {

    const res = await fetch(`${BASE_URL}/lectures/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      }
    });

    if (res.status === 401) {
      router.push('/login');
    }
    const result: any = await res.json();
    return result;
  } catch (error) {
    console.error('Error adding new lecture:', error);
    return null;
  }
};
export const uploadVideoToLecture = async (
  lectureId: number,
  name: string,
  file: File,
  router: any
): Promise<any | null> => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    const res = await fetch(`${BASE_URL}/lectures/${lectureId}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
      body: formData,
    });

    if (res.status === 401) {
      router.push('/login');
    }

    const result: any = await res.json();
    return result;
  } catch (error) {
    console.error('Error uploading video to lecture:', error);
    return null;
  }
};
export const setVideoCompleted = async (
  id: number
): Promise<any | null> => {
  try {

    const res = await fetch(`${BASE_URL}/lectures/video/complete/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      }
    });

    const result: any = await res.json();
    return result;
  } catch (error) {
    console.error('Error setting video complete:', error);
    return null;
  }
};