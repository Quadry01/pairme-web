export const DropDownComponent = ({dropName, option1, option2, option3, option4}) => {
  return (
    <div className="w-full">
      <select
        className="accent-white block w-full md:px-4 text-xxs font-light md:text-xl text-gray-400 focus:outline-none focus:border-transparent rounded-md md:rounded-xl h-5 md:h-12 bg-white focus:ring-2 ring-1 ring-blue"
      >
        <option value>{dropName}</option>
        <option value="opt1">{option1}</option>
        <option value="opt2">{option2}</option>
        <option value="opt3">{option3}</option>
        <option value="opt4">{option4}</option>
      </select>
    </div>
  );
};
