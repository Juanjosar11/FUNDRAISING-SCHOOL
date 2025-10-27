import React from 'react';
import SessionCard from './SessionCard';

interface Speaker {
  name: string;
  title: string;
  image: string;
}

interface Session {
  time: string;
  title: string;
  description: string;
  speakers: Speaker[];
}

interface ScheduleDayProps {
  dayLabel: string;
  dayTitle: string;
  sessions: Session[];
}

const ScheduleDay: React.FC<ScheduleDayProps> = ({ dayLabel, dayTitle, sessions }) => {
  return (
    <div className="schedule-day">
      <div className="day-header">
        <div className="day-label">
          <h3 className="day-label-text">{dayLabel}</h3>
        </div>
        <div className="day-title">
          <h3 className="day-title-text">{dayTitle}</h3>
        </div>
      </div>
      
      <div className="day-sessions">
        {sessions.map((session, index) => (
          <SessionCard
            key={index}
            time={session.time}
            title={session.title}
            description={session.description}
            speakers={session.speakers}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduleDay;