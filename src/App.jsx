import React, {useEffect, useState} from 'react';
import LanguageSelect from "./components/LanguageSelect.jsx";
import TextTranslate from "./components/TextTranslate.jsx";
import {PiTranslate} from "react-icons/pi";
import {useDispatch, useSelector} from "react-redux";
import {getLangs, translateText} from "./redux/actions/index.js";
import {en, tr} from "./constants.js";

const App = () => {

    const state = useSelector((store) => store.translate)

    const dispatch = useDispatch()

    const [sourceLang, setSourceLang] = useState(tr);

    const [targetLang, setTargetLang] = useState(en);

    const [text, setText] = useState("");

    useEffect(() => {
        dispatch(getLangs())
    })

    const handleTranslate = ()=>{
        dispatch(translateText({sourceLang, targetLang, text}))
    }

    useEffect(() => {
        if(!text) return
        dispatch(translateText({sourceLang, targetLang, text}))
    }, [targetLang]);


    const handleSwap = ()=>{
        setSourceLang(targetLang)
        setTargetLang(sourceLang)
        setText(state.answer)
    }

    return (
        <div className="bg-zinc-900 h-screen text-white grid place-items-center">

            <div className='w-[95vw] md:w-[85vw] lg:w-[80vw] max-w-[1100px] flex flex-col justify-center'>
                <h1 className="text-3xl font-bold mb-8  text-center">
                    Ceviri<span className='text-amber-600 text-4xl font-bold'>+</span>
                </h1>

                {/* Ust */}
                <LanguageSelect
                    sourceLang={sourceLang}
                    targetLang={targetLang}
                    setSourceLang={setSourceLang}
                    setTargetLang={setTargetLang}
                    handleSwap = {handleSwap}
                />

                {/* Text Alanlari */}
                <TextTranslate setText={setText} text={text} />

                {/* Button */}
                <button
                    onClick={handleTranslate}
                    className='flex justify-center items-center gap-1 bg-zinc-700 hover:bg-zinc-900 hover:ring-2 transition cursor-pointer mt-3 disabled:brightness-50 px-5 py-3 rounded-md font-semibold '>
                    <PiTranslate className='text-xl text-yellow-400'/> Cevir
                </button>
            </div>
        </div>
    );
};

export default App;
