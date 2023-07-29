'use client'
import PlaylistComponent, {
  AccordionData,
} from '@/components/dashboard/PlaylistComponent';
import useAuth from '@/app/auth/useAuth';
import useLectures from '@/app/api/hooks/useLectures';
const PageName = "indices"
const page: React.FC = () => {
  useAuth();
  const { lectures, loading, error } = useLectures({ PageName });
  return (
    <div>
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : lectures ? (
        <PlaylistComponent
          img="bg.png"
          imgDesc="Image description"
          weekNumber="Week 1"
          weekDesc="Introduction"
          desc1="Hello hejlejals flasjdfalj faldfjaklfj al"
          desc2="Description 2"
          downloadFileName="file.pdf"
          initialPlaylistData={lectures}
        />
      ) : (
        <div className='flex text-center h-screen w-screen justify-center items-center bg-[#1F2125] text-orange-400'><h1>Oops! No lectures found. </h1> </div>
      )}
    </div>
  );
};

export default page;
