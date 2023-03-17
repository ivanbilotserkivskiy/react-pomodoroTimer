import React from 'react'
import useTimer from '../hooks/useTimer'
export default function WorkPage (props) {
        const {startTimer,stopTimer,timerObj, setTimerObj, timerState,resetTimer} = useTimer()
    return (
        <div>
        <div className='workPage-div'>
       <div className='modeBtn-div'>
        <button onClick={()=>setTimerObj(prev=>{
            resetTimer()
            return {
                ...prev,
                mode: "work",
                minutes: prev.workMinutes,
                seconds: prev.workSeconds
            }
        })}>Work-Time</button>
        <button onClick={()=>setTimerObj(prev=>{
            resetTimer()
            return {
                ...prev,
                mode: "short",
                minutes: prev.shortMinutes,
                seconds: prev.shortSeconds
            }
        })}>Short-Break</button>
        <button onClick={()=>setTimerObj(prev=>{
            resetTimer()
            return {
                ...prev,
                mode:"long",
                minutes: prev.longMinutes,
                seconds: prev.longSeconds
            }
        })}>Long-Break</button>
       </div>
        <p className='workPage-timer'>{timerObj.minutes<10?"0"+timerObj.minutes:timerObj.minutes}:{timerObj.seconds<10?"0"+timerObj.seconds:timerObj.seconds}</p>
      
        </div>
          <div className='controlBtn-div'>
          <button className='workPage-btn' disabled={timerState} onClick={()=>startTimer()}>Start</button>
          <button className='workPage-btn' onClick={()=>stopTimer()}>Stop</button>
          <button className='workPage-btn' onClick={()=>resetTimer()}>Reset</button>
          </div>
          </div>
    )

}

