import PlaylistComponent, {
  AccordionData,
} from '@/components/dashboard/PlaylistComponent';
const page: React.FC = () => {
  // Define your accordion data
  const initialPlaylistData: AccordionData[] = [
    {
      title: 'Introduction to Mastery',
      active: 0,
      videos: [
        {
          title: 'Intro Video 1',
          duration: '3:30',
          videoFile: '/v2.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 2',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 3',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 4',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 5',
          duration: '4:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 6',
          duration: '6:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
      ],
    },
    {
      title: 'Mastery Chapter 1',
      active: 0,
      videos: [
        {
          title: 'Intro Video 1',
          duration: '10:30',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 2',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
      ],
    },
    {
      title: 'Chapter 1',
      active: 0,
      videos: [
        {
          title: 'Intro Video 1',
          duration: '10:30',
          videoFile: '/v.mp4',
          isActive: false,
        },
        {
          title: 'Intro Video 2',
          duration: '12:45',
          videoFile: '/v.mp4',
          isActive: false,
        },
      ],
    },
  ];

  return (
    <div>
      {/* Pass the necessary data to the PlaylistComponent */}
      <PlaylistComponent
        img="bg.png"
        imgDesc="Image description"
        weekNumber="Week 1"
        weekDesc="Introduction"
        desc1="Hello hejlejals flasjdfalj faldfjaklfj al"
        desc2="Description 2"
        downloadFileName="file.pdf"
        initialPlaylistData={initialPlaylistData}
      />
    </div>
  );
};

export default page;
