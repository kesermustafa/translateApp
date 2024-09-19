import React, {useMemo} from 'react';
import {TbTransfer} from "react-icons/tb";
import {useSelector} from "react-redux";
import ReactSelect from "react-select";

const LanguageSelect = ({setSourceLang, setTargetLang, sourceLang, targetLang}) => {

    const {isLoading, error, langs} = useSelector((store) => store.lang)

    const formated = useMemo(
        () =>
            langs.map((lang) => ({
                label: lang.name,
                value: lang.code,
            })), [langs]
    );

    return (
        <div className="flex gap-2 text-black">
            <ReactSelect
                value={sourceLang}
                onChange={(e) => setSourceLang(e)}
                isDisabled={isLoading}
                isLoading={isLoading}
                className='flex-1'
                options={formated}/>

            <button
                className=' flex gap-1 items-center bg-zinc-700 py-1 px-4 hover:bg-zinc-600 transition rounded text-white'>
                <TbTransfer className='text-3xl text-amber-600 font-bold'/>
            </button>

            <ReactSelect
                value={targetLang}
                onChange={(e) => setTargetLang(e)}
                isDisabled={isLoading}
                isLoading={isLoading}
                className='flex-1'
                options={formated}/>
        </div>
    );
};

export default LanguageSelect;
