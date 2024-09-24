const Hero = () => {
    return (
        <div className="w-[91.5vw] h-[80vh] relative translate-x-[10vh] translate-y-[10vh]">
            <div className="h-[55vh] w-[50vw] translate-x-[35vw] translate-y-[10vh]">
                <div id="gradient" className="font-bold text-[8vh]">OBJECTIVE: SURVIVE</div>

                <div className="text-[3vh]">
                    An astronaut becomes stranded on Mars after his team assume him dead,
                    and must rely on his ingenuity to find a way to signal to Earth
                    that he is alive and can survive until a potential rescue.
                </div>

                <div className="py-[2vh]">
                    <div className="w-[25vw] h-[.1vh] translate-x-[-6vh] translate-y-[-1vh] bg-orange-dark"></div>

                    <div className="flex w-[20vw]">
                        <div className="w-[.1vh] h-[17vh] bg-orange-dark translate-x-[-2vh] translate-y-[-3.5vh]"></div>
                        <a href="https://www.imdb.com/title/tt3659388/" className="h-fit w-full rounded-[5vh] bg-orange-dark p-[2vh] block text-center text-[4vh] hover:bg-orange transition-all font-bold">WATCH</a>
                        <div className="w-[.1vh] h-[17vh] bg-orange-dark translate-x-[2vh]  translate-y-[-3.5vh]"></div>
                        
                    </div>

                    <div className="w-[25vw] h-[.1vh] bg-orange-dark translate-x-[-6vh] translate-y-[-6vh]"></div>
                </div>
            </div>

            <div className="px-[3vh] h-[15vh] flex">
                <div className="w-[50%]">
                    <div className="text-[6vh] major text-[#FFF] opacity-[.3]">m. WAtney</div>
                    <div className="text-[3vh] text-gray">AGE: 42</div>
                    <div className="text-[3vh] text-gray">OXYGEN LEVEL: 31%</div>
                    <div className="text-[3vh] text-gray">STATUS: DEHYDRATED</div>
                </div>

                <div className="w-[50%] text-right">
                    <div className="text-[#888888] text-[6vh]">SEPTEMBER 30TH 2015</div>
                    <div className="text-[#E0E0E0] opacity-[.3] font-medium text-[4vh]">A Ridley’s Scott production</div>
                    <div className="text-[#E0E0E0] opacity-[.3] font-medium text-[4vh]">Based on Andy’s Weir novel</div>
                </div>
            </div>
        </div>
    )
}

export default Hero