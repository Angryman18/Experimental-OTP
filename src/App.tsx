import React, { useEffect, useState } from "react";
import { OTPInput, OTPGenerator } from "./components";
import { useValidiation } from "./hooks";

function App() {
  const inputArr: string[] = new Array(5).fill("");
  const [isNumpadKey] = useValidiation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [inputNum, setInputNum] = useState<string>("");

  const [currOTP, setCurrOTP] = useState<number>(Math.ceil(Math.random() * 100000));
  const [fakeLoading, setFakeLoading] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!e.key) return;
    if (isNumpadKey(e.code) && inputNum.length !== 5) {
      const value: React.Key = e.key;
      setInputNum(inputNum + value.toString());
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "Backspace") {
      const newVal: string = inputNum.slice(0, -1);
      setInputNum(newVal);
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    if (inputNum.length === 5) {
      setFakeLoading(true);
      const timer = setTimeout(() => {
        setFakeLoading(false);
        setInputNum("");
        setActiveIndex(0);
        setCurrOTP(Math.ceil(Math.random() * 100000))
        clearTimeout(timer);
      }, 2000);
    }
  }, [inputNum]);

  return (
    <div className='flex justify-center'>
      <div className='flex mt-10 flex-col'>
        <OTPGenerator OTP={currOTP} />
        <p className='text-lg text-[#444444] text-center'>Enter OTP</p>
        <div>
          {inputArr?.map((field: string, idx: number) => {
            return (
              <OTPInput
                key={idx}
                value={inputNum.charAt(idx)}
                handleChange={handleKeyDown}
                disabled={fakeLoading}
                isFocusElement={activeIndex === idx}
              />
            );
          })}
        </div>
        <div className='flex justify-center'>
          <p
            onClick={setCurrOTP.bind(null, Math.ceil(Math.random() * 100000))}
            className='cursor-pointer text-blue-600 text-sm my-1'
          >
            Re-generate
          </p>
        </div>
        <button
          disabled={fakeLoading}
          className='w-full flex justify-center disabled:bg-opacity-80 items-center bg-blue-600 text-white rounded-md shadow-md py-2 my-2'
        >
          {fakeLoading && (
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          )}
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
