//import react from "react";

function Container({children,classname=""})
{
    return(
        <div className={`${classname}`}>{children}</div>
    );
}

export default Container;