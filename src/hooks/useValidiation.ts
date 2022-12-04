type TisNumpadKey = (inputKey: string) => boolean;

const useValidiation = (): TisNumpadKey[] => {
  const isNumpadKey = (fullString: string): boolean => {
    const isEndValNumer = !isNaN(+fullString.slice(fullString.length - 1, fullString.length))
    return fullString.toLowerCase().includes("numpad") && isEndValNumer;
  };
  return [isNumpadKey];
};

export default useValidiation;
