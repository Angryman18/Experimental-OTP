import React, { createRef, useEffect } from "react";

interface Props {
  autoFocus?: boolean;
  handleChange: (e: React.KeyboardEvent) => void;
  value: string;
  isFocusElement?: boolean;
  disabled: boolean;
}

const Input = (props: Props) => {
  const { handleChange, value, isFocusElement, disabled } = props;
  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (isFocusElement && inputRef) {
      (inputRef.current as HTMLInputElement).focus();
    }
  }, [isFocusElement]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={() => {}}
      onKeyDown={handleChange}
      disabled={disabled}
      className='border-2 m-2 text-[#444444] focus:border-blue-600 border-slate-300 outline-none p-1  rounded-lg w-12 text-center font-bold text-2xl'
    />
  );
};

export default Input;
