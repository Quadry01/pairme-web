export const DropDownComponent = ({dropName}) => {
  return (
    <div className="w-full">
      <select
        className="block w-full md:px-4 text-xxs font-light md:text-xl text-gray-400 focus:outline-none focus:border-transparent rounded-md md:rounded-xl h-5 md:h-14 bg-white focus:ring-2 ring-1 ring-blue"
      >
        <option value>{dropName}</option>
        <option value="opt1">option 1</option>
        <option value="opt2">option 2</option>
        <option value="opt3">option 3</option>
        <option value="opt4">option 4</option>
      </select>
    </div>
  );
};
