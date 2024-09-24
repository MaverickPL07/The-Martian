import FrameCircle from './FrameCricle';

const FrameCircles = () => {
    return (
    <div id="circles" className="w-[100vw] h-[100vh] absolute z-5">
        <FrameCircle styles="absolute left-[2vh] top-[2vh]" />
        <FrameCircle styles="absolute right-[2vh] top-[2vh]" />
        <FrameCircle styles="absolute left-[2vh] bottom-[2vh]" />
        <FrameCircle styles="absolute right-[2vh] bottom-[2vh]" />
      </div>
    )
}

export default FrameCircles