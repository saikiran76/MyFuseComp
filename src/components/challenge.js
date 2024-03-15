const Challenge = () => {
    return (
        <div className="flex flex-col items-center px-5 py-10 md:px-20 border-red-500 border-solid shadow-sm bg-zinc-300 border-[3px] md:max-md:px-5">
            <div className="flex gap-5 items-center text-4xl font-semibold text-indigo-700 whitespace-nowrap md:flex-wrap">
                <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-stone-900 border-stone-900 w-[143px]" />
                <div className="flex-auto self-stretch">CHALLENGE</div>
                <div className="shrink-0 self-stretch my-auto h-px border border-solid bg-stone-900 border-stone-900 w-[143px]" />
            </div>
            <div className="mt-10 text-xl font-medium text-black max-md:mt-10 max-md:max-w-full text-center">
                Elevate your skills and embrace growth with our Regular Challenge – a
                daily journey to unlock your full potential.
            </div>
            <div className="mt-5 md:mt-10 max-w-full bg-amber-300 rounded border border-black border-solid blur-[2px] h-[286px] md:w-[90%]" />
        </div>
    );
}

export default Challenge;
