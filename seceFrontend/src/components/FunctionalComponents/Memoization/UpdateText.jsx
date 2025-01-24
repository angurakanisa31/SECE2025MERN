import { memo } from "react";
const UpdateNumber1=({value})=>{
    return(
        <div>
            <h2>UpdateNumber1.</h2>
            <h3>Value is {value}</h3>
        </div>

    );
};
export default memo(UpdateNumber1);