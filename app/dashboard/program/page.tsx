import React from 'react';
import { PlayList, PlayVideo } from '@/components/dashboard';
import { Container } from '@/components';

export default function Program() {
  const videoProps = {
    img: '/mulberies.jpg',
    imgDesc: 'Mulberries',
    weekNumber: 3,
    weekDesc: 'Liquidty Types',
    desc1:
      "We've been in your exact shoes & we know exactly how you feel. After joining numerous communities you're still struggling to either find consistency, you feel you're lacking something, you're struggling psychologically & etc.",
    desc2:
      'The Trading Room Network was created to change what it means to be in a trading community. We re not only here to teach you concepts but to teach you properly tested objective strategies with a psychological edge.',
    downloadFileName: 'Lesson 1-PDF.zip',
  };
  return (
    <Container>
      <div className=" w-full flex">
        <PlayVideo {...videoProps} />
        <PlayList />
      </div>
    </Container>
  );
}
