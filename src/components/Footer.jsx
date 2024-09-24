import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFigma, faGithub, faReact } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div id="footer" className="px-[2vh] flex items-center justify-between w-[91.5vw] h-[10vh] relative translate-y-[10vh] mx-auto">
            <div className="text-[#888888] text-[6vh] w-[30.5vw]">SOL 149</div>
            
            <div className="flex gap-[1vw] w-[30.5vw] text-orange-dark  text-[4vh] justify-center items-center">
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faFigma} />
            </div>

            <div className="text-gray text-[3vh] text-right w-[30.5vw]">
                Szymon Ziemian <br />
                React.js, tailwindcss, Figma
            </div>
        </div>
    )
}

export default Footer