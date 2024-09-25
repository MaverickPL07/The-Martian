const Hero = () => {
    return (
        <div className="w-[91.5vw] lg:h-[80vh] md:h-[80vh] relative md:translate-x-[10vhx] lg:translate-x-[10vh] md:translate-y-[10vh] lg:translate-y-[10vh]">
            <div className="h-[55vh] md:w-[50vw] lg:w-[50vw] mx-[5vw] lg:mx-[0] md:mx-[0] smd:translatex-[35vw] lg:translate-x-[35vw] translate-y-[10vh]">
                <div id="gradient" className="font-bold lg:text-[8vh] md:text-[8vh] text-[5vh]">OBJECTIVE: SURVIVE</div>

                <div className="md:text-[3vh] lg:text-[3vh] text-[2.5vh]">
                    An astronaut becomes stranded on Mars after his team assume him dead,
                    and must rely on his ingenuity to find a way to signal to Earth
                    that he is alive and can survive until a potential rescue.
                </div>

                <div className="py-[2vh]">
                    <div className="lg:w-[25vw] md:w-[25vw] w-[105vw] h-[.1vh] translate-x-[-6vh] translate-y-[-1vh] bg-orange-dark"></div>

                    <div className="flex lg:w-[20vw] md:w-[20vw] w-[90vw]">
                        <div className="w-[.1vh] h-[17vh] bg-orange-dark translate-x-[-2vh] translate-y-[-3.5vh]"></div>
                        <a href="https://www.imdb.com/title/tt3659388/" className="h-fit w-full rounded-[5vh] bg-orange-dark p-[2vh] block text-center text-[4vh] hover:bg-orange transition-all font-bold">WATCH</a>
                        <div className="w-[.1vh] h-[17vh] bg-orange-dark translate-x-[2vh]  translate-y-[-3.5vh]"></div>
                        
                    </div>

                    <div className="lg:w-[25vw] md:w-[25vw] w-[105vw] h-[.1vh] bg-orange-dark translate-x-[-6vh] translate-y-[-6vh]"></div>
                </div>
            </div>

            <div className="px-[3vh] lg:h-[15vh] md:h-[15vh] flex mt-[8vh] lg:mt-[0] md:mt-[0]">
                <div className="w-[50%]">
                    <div className="text-[3vh] md:text-[6vh] lg:text-[6vh] major text-[#FFF] opacity-[.3]">m. WAtney</div>
                    <div className="lg:text-[3vh] md:text-[3vh] text-[2.5vh] text-gray">AGE: 42</div>
                    <div className="lg:text-[3vh] md:text-[3vh] text-[2.5vh] text-gray">OXYGEN LEVEL: 31%</div>
                    <div className="lg:text-[3vh] md:text-[3vh] text-[2.5vh] text-gray">STATUS: DEHYDRATED</div>
                </div>

                <div className="w-[50%] text-right">
                    <div className="text-[#888888] lg:text-[6vh] md:text-[6vh] text-[3vh]">SEPTEMBER 30TH 2015</div>
                    <div className="text-[#E0E0E0] opacity-[.3] font-medium lg:text-[4vh] md:text-[4vh] text-[2.5vh]">A Ridley’s Scott production</div>
                    <div className="text-[#E0E0E0] opacity-[.3] font-medium lg:text-[4vh] md:text-[4vh] text-[2.5vh]">Based on Andy’s Weir novel</div>
                </div>
            </div>
        </div>
    )
}

export default Hero