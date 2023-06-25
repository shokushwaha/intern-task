// component to display while fetching data from api
'use client'
const LoadingScreen = ({ loadingMessage }) =>
    <>
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="container">
                <div className="cloud front">
                    <span className="left-front"></span>
                    <span className="right-front"></span>
                </div>
                <span className="sun sunshine"></span>
                <span className="sun"></span>
                <div className="cloud back">
                    <span className="left-back"></span>
                    <span className="right-back"></span>
                </div>
            </div>
        </div>
    </>

export default LoadingScreen