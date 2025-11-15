import { useMemo } from "react";
import {
  checkDateEqual,
  checkMonthEqual,
  generateCalendarDays,
  getFormattedDate,
  getMonthName,
  getWeekDays,
  getYear,
} from "./utils";

type CalendarProps = {
  date?: string | Date;
};

const Calendar = ({ date = new Date() }: CalendarProps) => {
  const calendarDate: Date = useMemo(() => {
    return getFormattedDate(date);
  }, [date]);

  const monthName: string | null = useMemo(() => {
    return getMonthName(calendarDate);
  }, [calendarDate]);

  const yearNumber: number | null = useMemo(() => {
    return getYear(calendarDate);
  }, [calendarDate]);

  const weekDays: string[] = useMemo(() => {
    return getWeekDays();
  }, []);

  const calendarDays: Date[] = useMemo(() => {
    return generateCalendarDays(calendarDate);
  }, [calendarDate]);

  return (
    <div className="bg-gray-950 text-blue-300 font-mono p-2 w-[14rem]">
      <div
        data-testid="month-year"
        className="flex items-center justify-center h-10"
      >
        {monthName} {yearNumber}
      </div>

      <div data-testid={"weeks"} className="grid grid-cols-7">
        {weekDays?.map((week, wIndex) => (
          <div
            key={`weekday-${wIndex}`}
            data-testid={`weekday-${wIndex}`}
            className="h-8 w-8 flex items-center justify-center "
          >
            {week}
          </div>
        ))}

        {calendarDays?.map((day, dIndex) => (
          <div
            data-testid={`day-${dIndex}`}
            key={day.toISOString() + "-" + dIndex}
            className={`h-8 w-8 flex items-center justify-center ${
              checkDateEqual(calendarDate, day)
                ? "text-gray-950 bg-blue-300 font-bold"
                : ""
            }`}
          >
            {checkMonthEqual(calendarDate, day) ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
