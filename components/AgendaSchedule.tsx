import React from 'react';
import SpeakerCard from './SpeakerCard';
import ScheduleDay from './ScheduleDay';

const AgendaSchedule: React.FC = () => {
  const day1Sessions = [
    {
      time: "09.30-10.30 AM",
      title: "Opening Remarks",
      description: "Welcome to the AIcron Tech Summit. Kick off the day with an introduction from the event organizers and a sneak peek of what's in store.",
      speakers: []
    },
    {
      time: "10.30-11.30 AM",
      title: "Keynote Address: Revolutionizing the Future with AI",
      description: "By Dr. Emma Parker, Chief AI Scientist at InnovateX Labs. Explore the transformative impact of AI on industries and society.",
      speakers: [
        {
          name: "Dr. Emma Parker",
          title: "CEO, Zecon AI",
          image: "/images/speakers/emma-parker.png"
        }
      ]
    },
    {
      time: "12.30-01.30 AM",
      title: "Panel Discussion: AI in Action: Real-World Applications",
      description: "A lively discussion on how AI is being implemented in sectors like healthcare, finance, and logistics, with industry experts.",
      speakers: [
        {
          name: "Sara Williams",
          title: "AI Strategist, InnovateTech",
          image: "/images/speakers/sara-williams.png"
        },
        {
          name: "Ravi Singh",
          title: "Lead AI Engineer, MedTech Solutions",
          image: "/images/speakers/ravi-singh.png"
        },
        {
          name: "James Turner",
          title: "Senior Data Scientist, Quantum Analytics",
          image: "/images/speakers/james-turner.png"
        },
        {
          name: "Emily Roberts",
          title: "Director, AI Applications",
          image: "/images/speakers/emily-roberts.png"
        }
      ]
    }
  ];

  const day2Sessions = [
    {
      time: "09.30-10.30 AM",
      title: "Morning Networking Coffee",
      description: "Catch up with fellow attendees over coffee before diving into another exciting day of learning.",
      speakers: []
    },
    {
      time: "11.30-12.30 PM",
      title: "Keynote Address: The Intersection of AI and Blockchain",
      description: "By John Mitchell, Co-Founder & CEO at AI Solutions Corp. Understand how AI and blockchain can work together to create innovative solutions.",
      speakers: [
        {
          name: "John Mitchell",
          title: "Co-Founder at AI Corp",
          image: "/images/speakers/john-mitchell.png"
        }
      ]
    },
    {
      time: "2.30-04.30 PM",
      title: "Panel Discussion: AI and Automation in Industry 4.0",
      description: "Panelists explore how AI-powered automation is driving the future of manufacturing and supply chain.",
      speakers: [
        {
          name: "Dr. Lisa White",
          title: "Chief Innovation Officer, TechFlow",
          image: "/images/speakers/lisa-white.png"
        },
        {
          name: "Mark Johnson",
          title: "Director, AI Solutions, RoboTech",
          image: "/images/speakers/mark-johnson.png"
        },
        {
          name: "Priya Patel",
          title: "Head, Digital Transformation",
          image: "/images/speakers/priya-patel.png"
        },
        {
          name: "David Collins",
          title: "VP, Automation & Robotics",
          image: "/images/speakers/david-collins.png"
        }
      ]
    }
  ];

  const day3Sessions = [
    {
      time: "09.30-11.30 AM",
      title: "Workshop: Driving ROI with Data",
      description: "Learn how businesses can use AI to optimize operations, increase profitability, and drive growth.",
      speakers: []
    },
    {
      time: "02.30-03.30 PM",
      title: "Fireside Chat: The Future of AI in Consumer Products",
      description: "Join Olivia Reynolds, Principal Engineer at AlphaTech, as she discusses the role of AI in creating personalized consumer experiences.",
      speakers: [
        {
          name: "Olivia Reynolds",
          title: "Engineer at Alpha Tech",
          image: "/images/speakers/olivia-reynolds.png"
        }
      ]
    },
    {
      time: "04.30-05.30 PM",
      title: "Closing Remarks & Thank You",
      description: "A final wrap-up of the AIcron Tech Summit, with acknowledgments to all speakers, sponsors, and attendees. Looking forward to seeing you next year!",
      speakers: []
    }
  ];

  return (
    <section className="agenda-section">
      <div className="agenda-container">
        <div className="agenda-header">
          <div className="section-tag">
            <div className="tag-line"></div>
            <h4 className="tag-text">Event agenda</h4>
          </div>
          <h2 className="section-title">
            Meet out sponsors who help to bring{' '}
            <span className="text-muted">this think live</span>
          </h2>
        </div>

        <div className="agenda-content">
          <ScheduleDay
            dayLabel="Kickoff"
            dayTitle="Day 1 : Main Conference"
            sessions={day1Sessions}
          />
          
          <ScheduleDay
            dayLabel="Main Day"
            dayTitle="Day 2 : Deep Dive Sessions"
            sessions={day2Sessions}
          />
          
          <ScheduleDay
            dayLabel="Sumup"
            dayTitle="Day 3 : Networking Day"
            sessions={day3Sessions}
          />
        </div>
      </div>
    </section>
  );
};

export default AgendaSchedule;