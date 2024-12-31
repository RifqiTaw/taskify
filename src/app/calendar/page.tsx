"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FC, useState } from "react";

const CalendarPage: FC = () => {
  const [events, setEvents] = useState([
    { id: "1", title: "Meeting with Team", start: "2024-11-20T10:00:00" },
    { id: "2", title: "Project Deadline", start: "2024-11-22" },
  ]);

  // Handle event creation (e.g., double-click or custom modal)
  const handleDateClick = (info: { dateStr: any }) => {
    const title = prompt("Enter Event Title");
    if (title) {
      setEvents([
        ...events,
        { id: String(events.length + 1), title, start: info.dateStr },
      ]);
    }
  };

  // Handle event drag-and-drop
  const handleEventDrop = (info: { event: { id: string; startStr: any } }) => {
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? { ...event, start: info.event.startStr }
        : event
    );
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" // Default view (monthly)
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events} // Event data
        editable={true} // Enable drag-and-drop
        selectable={true} // Enable date selection
        dateClick={handleDateClick} // Add new events
        eventDrop={handleEventDrop} // Handle drag-and-drop
        height="auto" // Responsive height
      />
    </div>
  );
};

export default CalendarPage;
