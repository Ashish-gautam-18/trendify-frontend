import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function TimelineHorizontal() {
  return (
    // Set position to alternate for a premium, clean timeline layout flow
    <Timeline position="alternate" className="py-6 bg-white rounded-md shadow-sm border max-w-lg mx-auto">
      
      {/* Step 1 */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="text-xs font-medium">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#9155FD' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="font-semibold text-gray-800 text-sm">Eat</TimelineContent>
      </TimelineItem>

      {/* Step 2 */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="text-xs font-medium">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#9155FD' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="font-semibold text-gray-800 text-sm">Code</TimelineContent>
      </TimelineItem>

      {/* Step 3 */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="text-xs font-medium">
          12:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#9155FD' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="font-semibold text-gray-800 text-sm">Sleep</TimelineContent>
      </TimelineItem>

      {/* Step 4 - Last Item (Removed internal Connector) */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" className="text-xs font-medium">
          09:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#9155FD' }} />
          {/* Connector removed cleanly to finalize the visual pipeline branch loop */}
        </TimelineSeparator>
        <TimelineContent className="font-semibold text-gray-800 text-sm">Repeat</TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}

