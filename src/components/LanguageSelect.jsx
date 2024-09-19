import React from 'react';
import {TbTransfer} from "react-icons/tb";

const LanguageSelect = () => {
    return (
        <div className="flex gap-2 text-black">
            <select className='flex-1'>
                <option value="">Seciniz</option>
            </select>
            <button
                className=' flex gap-1 items-center bg-zinc-700 py-1 px-4 hover:bg-zinc-600 transition rounded text-white'><TbTransfer
                className='text-3xl text-amber-600 font-bold'/></button>
            <select className='flex-1'>
                <option value="">Seciniz</option>
            </select>
        </div>
    );
};

export default LanguageSelect;
