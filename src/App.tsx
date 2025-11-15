import Calendar from "./Calendar";

function App() {
  return (
    <div
      data-testid="calendar-component"
      className="h-screen w-screen bg-gray-300 flex justify-center items-center"
    >
      <Calendar date={"03/11/2025"} />
    </div>
  );
}

export default App;
