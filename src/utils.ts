export const getMonthName = (date: Date = new Date()): string | null => {
  return date.toLocaleString("en-us", { month: "long" });
};

export const getYear = (date: Date = new Date()): number | null => {
  return date.getFullYear();
};

//Works for "03/11/2025" (3rd November)
export const getFormattedDate = (date: string | Date): Date => {
  return typeof date === "string"
    ? new Date(
        Number(date?.split("/")[2]),
        Number(date?.split("/")[1]) - 1,
        Number(date?.split("/")[0])
      )
    : date instanceof Date
    ? date
    : new Date();
};

export const getWeekDays = (): string[] => {
  return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
};

export const generateCalendarDays = (date: Date = new Date()): Date[] => {
  const month: number = date.getMonth();
  const year: number = date.getFullYear();

  const startOfMonth: Date = new Date(year, month, 1);
  const endOfMonth: Date = new Date(year, month + 1, 0);

  const weekOfStartOfMonth: number = new Date(startOfMonth).getDay();
  const weekOfEndOfMonth: number = new Date(endOfMonth).getDay();

  const getStartWeekOfMonth: Date = new Date(
    startOfMonth.setDate(startOfMonth.getDate() - weekOfStartOfMonth)
  );

  const getEndWeekOfMonth: Date = new Date(
    endOfMonth.setDate(endOfMonth.getDate() + 6 - weekOfEndOfMonth)
  );

  let allDays: Date[] = [];

  while (getStartWeekOfMonth <= getEndWeekOfMonth) {
    allDays.push(new Date(getStartWeekOfMonth));
    getStartWeekOfMonth.setDate(getStartWeekOfMonth.getDate() + 1);
  }

  return allDays;
};

export const checkDateEqual = (
  firstDate: Date = new Date(),
  secondDate: Date = new Date()
): boolean => {
  return (
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getDate() === secondDate.getDate()
  );
};

export const checkMonthEqual = (
  firstDate: Date = new Date(),
  secondDate: Date = new Date()
): boolean => {
  return firstDate.getMonth() === secondDate.getMonth();
};
