// component for switching units between metric and imperial
'use client'

const UnitSwitch = ({ onClick, unitSystem }) => {
    return (
        <div className="flex items-center justify-end gap-4 mt-8 font-semibold text-lg pb-8">
            <p
                className={unitSystem == "metric" ? "font-bold text-blue-500 hover:cursor-pointer" : "hover:cursor-pointer"}
                onClick={onClick}
            >
                Metric System
            </p>
            <p
                className={unitSystem != "metric" ? "font-bold text-blue-500 hover:cursor-pointer" : "hover:cursor-pointer"}
                onClick={onClick}
            >
                Imperial System
            </p>
        </div>
    );
};

export default UnitSwitch