import React, { FormEvent } from "react";
import { minuteState, hourSelector } from "./components/Atoms";
import { useRecoilState } from "recoil";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
