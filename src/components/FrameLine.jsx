const FrameLine = ({horizontal, vertical}) => {
    return (
        <>
            {
                horizontal ?
                <div className="w-[100vw] h-[.2vh] bg-orange-dark"></div>
                :
                <div className="w-[.2vh] h-[100vh] bg-orange-dark"></div>
            }
        </>
    )
}

export default FrameLine