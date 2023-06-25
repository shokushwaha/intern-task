// wrapper for the main component
'use client'
const Header = ({ children }) => {
    return <div className="flex items-center justify-between ">{children}</div>;
};

export default Header