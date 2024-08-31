import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import { Card, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import {  useRef, useState } from 'react';
import CalendarStyle from './CalendarStyle';
import CalendarToolbar from './CalendarToolbar';


const  Calendar = (events) => {
    const calendarRef = useRef(null);
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState('dayGridMonth');
  
   
    const handleClickToday = () => {
      const calendarEl = calendarRef.current;
      if (calendarEl) {
        const calendarApi = calendarEl.getApi();
        calendarApi.today();
        setDate(calendarApi.getDate());
      }
    };
  
    const handleChangeView = (newView) => {
      const calendarEl = calendarRef.current;
      if (calendarEl) {
        const calendarApi = calendarEl.getApi();
        calendarApi.changeView(newView);
        setView(newView);
      }
    };
  
    const handleClickDatePrev = () => {
      const calendarEl = calendarRef.current;
      if (calendarEl) {
        const calendarApi = calendarEl.getApi();
        calendarApi.prev();
        setDate(calendarApi.getDate());
      }
    };
  
    const handleClickDateNext = () => {
      const calendarEl = calendarRef.current;
      if (calendarEl) {
        const calendarApi = calendarEl.getApi();
        calendarApi.next();
        setDate(calendarApi.getDate());
      }
    };
  
   
    return (
        <Container>
          <Card>
            <CalendarStyle>
              <CalendarToolbar
                date={date}
                view={view}
                onNextDate={handleClickDateNext}
                onPrevDate={handleClickDatePrev}
                onToday={handleClickToday}
                onChangeView={handleChangeView}
              />
              <FullCalendar
                weekends
                editable
                droppable
                selectable
                events={events}
                ref={calendarRef}
                rerenderDelay={10}
                initialDate={date}
                initialView={view}
                dayMaxEventRows={3}
                eventDisplay="block"
                headerToolbar={false}
                allDayMaintainDuration
                eventResizableFromStart
                height={720}
                plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
              />
            </CalendarStyle>
          </Card>
  
        </Container>
    );
  }
  
export default Calendar;