import { useState } from "react";


function ConfirmButton(props){
    const [isConfirmed, setIsComfirmed] = useState(false);

    const handleConfirm = () => {
        setIsComfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}

export default ConfirmButton;