import React from "react";

let Layout = function({backgroundImage, title, number, children}) {
    return (
        
        <div className="layout" style={{backgroundImage: backgroundImage}}>
            <h1 className="layout__title"><span className="layout__number">{number}</span>{title}</h1>
            {children}
        </div>
    );
}

export default Layout;