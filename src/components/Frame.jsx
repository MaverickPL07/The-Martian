import FrameLine from './FrameLine';

const Frame = () => {
    return (
        <div id="frame" className="invisible md:visible lg:visible  absolute z-3 w-[100vw] h-[100vh] z-4">
        <div className='absolute top-[10vh] z-4'>
          <FrameLine horizontal />
        </div>

        <div className="flex w-[100vw]"> 
          <div className="absolute left-[10vh] z-4"><FrameLine vertical /></div>
          <div className="absolute right-[10vh] z-4"><FrameLine vertical /></div>
        </div>

        <div className='absolute bottom-[10vh] z-4'>
          <FrameLine horizontal />
        </div>
      </div>
    )
}

export default Frame