import { Hero, Meta } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Meta title="Home" />
      <main className="">
        <Hero />
      </main>
    </>
  );
}
