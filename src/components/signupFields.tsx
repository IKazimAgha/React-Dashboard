import React from 'react';

interface RoundInputFieldInterface {
    title: string,
    type: string,
    onChangeText: Function;
    value: string;
}

const RoundInputField = (props: RoundInputFieldInterface) => {
    
    const {
        title,
        type,
        onChangeText,
        value
    } = props;

    return(
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input
             onChange={(e) => onChangeText(e.target.value)} 
             type={type}
             value={value}
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder={type === "email" ? "name@company.com" : ""} />
        </div>
    )
}

export default RoundInputField;