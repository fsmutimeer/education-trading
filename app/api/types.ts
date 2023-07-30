
export interface GeneralResponse {
  message: string;
  statusCode: number
}
export interface CreateUser {
  username: string;
  password: string;
  email: string;
  phone: string;
}
export interface Login {
  username: string;
  password: string
}
export interface UpdateUser {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}
export interface Course {
  id: number;
  name: string;
  title: string;
  photo: string;
}

export interface EnrolledCourse {
  enrollmentId: number;
  courseId: number;
  userId: number;
  name: string;
  title: string;
  photo: string;
  completionPercentage: number;
}
export interface Video {
  id: number;
  name: string;
  videoLength: number;
  url: string;
  isWatched: boolean;
}
export interface Lecture {
  id: number;
  name: string;
  videos: Video[];
  courseId: number;
}
export interface CreateLecture {
  name: string;
  courseId: number;
}
export interface UpdateLecture {
  name: string;
}

export interface AccordionData {
  title: string;
  videos: VideoData[];
  active: number;
}
export interface VideoData {
  id: number;
  title: string;
  videoFile: string;
  isWatched: boolean;
  duration: string;
  isActive: boolean;
}

export interface AccordionProps {
  accordionData: AccordionData[];
  toggleAccordion: (index: number) => void;
  handleVideoClick: (video: VideoData) => void;
  selectedVideo: VideoData;
}

export interface OverviewProps {
  desc1: string;
  desc2: string;
}

export interface PlaylistComponentProps {
  img: string;
  imgDesc: string;
  weekNumber: string;
  weekDesc: string;
  desc1: string;
  desc2: string;
  downloadFileName: string;
  initialPlaylistData: AccordionData[];
}