// error component if error occurs while fetching data from api
'use client'


import Image from "next/image";

const ErrorScreen = ({ errorMessage, children }) => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-4xl">
            <Image src={"/icons/error.png"} width={100} height={100} alt="error" />
            <h1 className="">{errorMessage}</h1>
            <span className="mb-8">Refresh the page!</span>

        </div>
    );
};
export default ErrorScreen