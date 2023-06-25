// wrapper for the main content
'use client'
const ContentBox = ({ children }) => {
    return <div className="bg-gradient-to-r from-gray-100 to-gray-300 px-4 pt-4 rounded-r-3xl">{children}</div>;
};

export default ContentBox