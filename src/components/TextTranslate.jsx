import React from 'react';
import {useSelector} from "react-redux";
import Loading from "./Loading.jsx";

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
            <div className='flex-1 relative'>
                <textarea
                    value={text && answer}
                    disabled
                    className='w-full min-h-[300px] max-h-[500px] text-gray-300 text-[20px] rounded p-[10px]'>
                </textarea>
                {
                    isLoading && (<div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2                 y-[-50%]'>
                        <Loading/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TextTranslate;
