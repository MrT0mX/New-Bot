const TIME_ZONE = "Asia/Dhaka";

function getBangladeshClock(date = new Date(), hourOffset = 0) {
  const adjustedDate = new Date(date.getTime() + hourOffset * 60 * 60 * 1000);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).formatToParts(adjustedDate);
  const value = type => parts.find(part => part.type === type)?.value;
  const year = value("year");
  const month = value("month");
  const day = value("day");
  const hour = value("hour");
  const minute = value("minute");
  const second = value("second");
  const period = value("dayPeriod");

  return {
    date: `${year}-${month}-${day}`,
    hour: Number(hour),
    minute: Number(minute),
    second: Number(second),
    period,
    hourlyTime: `${hour}:00:00 ${period}`,
    time: `${hour}:${minute}:${second} ${period}`
  };
}

module.exports = { TIME_ZONE, getBangladeshClock };
