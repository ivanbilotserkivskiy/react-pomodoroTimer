import React from "react";

export default function Timer(){


    const [timerObj, setTimerObj] = React.useState({
        minutes: 25,
        seconds: 0,
        mode:"work",
        workMinutes:25,
        workSeconds:0,
        shortMinutes:5,
        shortSeconds:0,
        longMinutes:15,
        longSeconds:0,
    })
    const [timerState, setTimerState] = React.useState(false)

    const timerId = React.useRef()

 

    
        function startTimer() {
            setTimerState(true)
            timerId.current = setInterval(()=>{
                    setTimerObj(prev=> {
                        if(!prev.minutes&&!prev.seconds){
                            setTimerState(false)
                            clearInterval(timerId.current)
                            return {
                                ...prev
                            }
                        }
                        else{
                        return {
                            ...prev,
                            minutes: prev.seconds===0?prev.minutes-1:prev.minutes,
                            seconds: prev.seconds===0?59:prev.seconds-1
                        }
                    }
                    })
            },1000)
        }
        function stopTimer() {
            setTimerState(false)
            
            clearInterval(timerId.current)
        }

        function resetTimer() {
            setTimerState(false)
            clearInterval(timerId.current)
            setTimerObj(prev=> {
                if(prev.mode==="work") {
                    return {
                        ...prev,
                        minutes:prev.workMinutes,
                        seconds:prev.workSeconds
                    }
                }
                else if(prev.mode==="short") {
                    return {
                        ...prev,
                        minutes:prev.shortMinutes,
                        seconds:prev.shortSeconds
                    }
            }
                else  if(prev.mode==="long") {
                    return {
                        ...prev,
                        minutes:prev.longMinutes,
                        seconds:prev.longSeconds
                    }
                }
        }
            )
        }
    return {startTimer,stopTimer, timerObj, timerState, resetTimer, setTimerObj}
}