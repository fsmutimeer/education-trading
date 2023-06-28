import { FaHandshake } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      position="right"
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'transparent', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Phase I"
      iconStyle={{ background: 'rgb(251 146 60)', color: 'rgb(251 146 60)' }}
    >
      <FaHandshake />
      <h4 className=" text-orange-400">INITIATION INTO THE TRADING ROOM.</h4>
      <p className="text-[12px] text-gray-400">
        Accustom yourself into the workings of how TTR Members trade & operate.
      </p>
      <p className="text-[12px] text-gray-400">
        Understand how you should treat trading & also how to present yourself
        as a member.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      position="right"
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'transparent', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(243, 121, 33)' }}
      date="Phase I"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: 'rgb(251 146 60)' }}
    >
      <FaHandshake />
      <h4 className="vertical-timeline-element-title text-orange-400">
        INITIATION INTO THE TRADING ROOM.
      </h4>
      <p className="text-[12px] text-gray-400">
        Accustom yourself into the workings of how TTR Members trade & operate.
      </p>
      <p className="text-[12px] text-gray-400">
        Understand how you should treat trading & also how to present yourself
        as a member.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      position="right"
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'transparent', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Phase I"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    >
      <FaHandshake />
      <h4 className="vertical-timeline-element-title text-orange-400">
        INITIATION INTO THE TRADING ROOM.
      </h4>
      <p className="text-[12px] text-gray-400">
        Accustom yourself into the workings of how TTR Members trade & operate.
      </p>
      <p className="text-[12px] text-gray-400">
        Understand how you should treat trading & also how to present yourself
        as a member.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      position="right"
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'transparent', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Phase I"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    >
      <FaHandshake />
      <h4 className="vertical-timeline-element-title text-orange-400">
        INITIATION INTO THE TRADING ROOM.
      </h4>
      <p className="text-[12px] text-gray-400">
        Accustom yourself into the workings of how TTR Members trade & operate.
      </p>
      <p className="text-[12px] text-gray-400">
        Understand how you should treat trading & also how to present yourself
        as a member.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      position="right"
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'transparent', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Phase I"
      iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    >
      <FaHandshake />
      <h4 className="vertical-timeline-element-title text-orange-400">
        INITIATION INTO THE TRADING ROOM.
      </h4>
      <p className="text-[12px] text-gray-400">
        Accustom yourself into the workings of how TTR Members trade & operate.
      </p>
      <p className="text-[12px] text-gray-400">
        Understand how you should treat trading & also how to present yourself
        as a member.
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default TimeLine;
