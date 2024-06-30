function ScheduleFooter() {
  const apiStreet = import.meta.env.VITE_STREET;
  const apiCity = import.meta.env.VITE_CITY;

  return (
    <div className="grid grid-rows-3 gap-5 sm:ml-auto">
      <div className="text-lg">Opening Hours</div>
      <div className="grid grid-rows-3 text-xs">
        <div>Mon - Fri: 8am - 8pm</div>
        <div>Saturday: 9am - 10pm</div>
        <div>Sunday: 9am - 8pm</div>
      </div>
      <div className="grid grid-rows-2">
        <div>{apiStreet}</div>
        <div>{apiCity}</div>
      </div>
    </div>
  );
}

export default ScheduleFooter;