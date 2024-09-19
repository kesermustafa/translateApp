import React from 'react';
import {useSelector} from "react-redux";

const TextTranslate = ({text, setText}) => {

    const {isLoading, error, answer} = useSelector((store) => store.translate);


    return (
        <div className="flex mt-5 gap-3 max-md:flex-col ">
            <div className='flex-1'>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='w-full min-h-[300px] max-h-[500px] text-black text-[20px] rounded p-[10px]'></textarea>
            </div>
            <div className='flex-1'>
                <textarea
                    value={answer}
                    disabled
                    className='w-full min-h-[300px] max-h-[500px] text-gray-300 text-[20px] rounded p-[10px]'></textarea>
            </div>
        </div>
    );
};

export default TextTranslate;
