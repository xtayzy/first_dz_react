import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [str, setStr] = useState('')
    function InfoDay(){
        if (new Date().getDate() % 2 === 0){
            return (
                <div>
                    <div>{new Date().getMonth()}</div>
                    <div>{new Date().getFullYear()}</div>
                </div>
            )
        }else{
            return (
                <div>
                    <div>{new Date().getDay()}</div>
                    <div>{new Date().getDate()}</div>
                </div>
            )
        }
    }
    return (
        <>
            <div>
                <input type="text" onInput={(event) => setStr(event.target.value)}/>
                <div>{str.split('').reverse().join('')}</div>
            </div>
            <div>
                <InfoDay/>
            </div>
        </>
    )
}

export default App
