import { useRef } from "react";
import css from '../style.module.css'

function InputPin() {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleKeyPress = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = inputsRef.current[index];
    if (input && input.value.length === 1 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus();
    } else if (event.key == 'Backspace' && inputsRef.current[index - 1]) {
        inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className={css.pinInputs}>
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          type="text"
          className={css.pinDigit}
          maxLength={1}
          required
          ref={(el) => {
            if (el) inputsRef.current[index] = el;
          }}
          onKeyUp={(e) => handleKeyPress(index, e)}
        />
      ))}
    </div>
  );
}

export default InputPin;
