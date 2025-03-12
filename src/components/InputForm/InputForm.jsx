
export const InputForm = ({ txtLabel,id,placeholder,type='text',handleEvent }) => {

  return (
    <div className="flex flex-col mb-4">
      {/* Nombre completo */}
      <label htmlFor="txt-fullname" className="block text-sm font-medium text-gray-300">
        {txtLabel}
      </label>
      <input
        onChange={handleEvent}
        type={type}
        id={ id }
        placeholder={ placeholder }
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />      
    </div>
  );
};
