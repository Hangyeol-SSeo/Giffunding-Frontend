import React, {useState, useEffect} from 'react';

export default function Progressbar(){
    const [filled, setFilled] = useState(0);
    // const [isRunning, setIsRunning] = useState(false);
    // useEffect(() => {
    //     if(filled<100&&isRunning){
    //         setTimeout(())
    //     }
    // })
    return (
        <div>
            <div className="progressbar">
                <div style={{
                    height:"100%",
                    width: `${filled}%`,
                    backgroundColor: "#d81111"
                }}></div>
                <span className='progressPercent'>{filled}%</span>
            </div>
        </div>
    )
}
