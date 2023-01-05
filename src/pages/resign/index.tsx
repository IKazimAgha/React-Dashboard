import React, { useState } from 'react';
import TextAreaField from '../../components/textAreaFields';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import CreateButton from '../../components/Buttons/createButton';
import dayjs from 'dayjs';


const ResignPage = () => {
    
    const [reason, setReason] = useState('');
    const [endDate, setEndDate] = useState(new Date());
    const [addFeedback, setAddFeedback] = useState("")

    const handleClick = () => {
        
    }

    return(
        <div>
            <header>
                <h1>Do you wish to resign?</h1>
            </header>
            <section className="bg-gray-50 dark:bg-gray-900 mx-auto md:w-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-10">
                    <h3 className="pb-5 font-bold">
                        Please add the information below
                    </h3>
                    <form className="pb-5">
                        <TextAreaField title="Reason" value={reason} onChangeText={(t: string) => setReason(t)} />
                        <div className="py-10"> 
                            <h3 className="font-medium">Please Select your last working date</h3>                                                        
                            <div className="py-5">
                                <DatePicker 
                                    inline 
                                    selected={endDate} 
                                    onChange={(date:Date) => setEndDate(date)}
                                    minDate={new Date()}
                                />
                            </div>
                        </div>
                        <TextAreaField title="Feedback" value={addFeedback} onChangeText={(t: string) => setAddFeedback(t)} />
                    </form>

                    <div className="flex justify-center">
                        <CreateButton title="Save" onHandleClick={() =>handleClick()} />
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default ResignPage;