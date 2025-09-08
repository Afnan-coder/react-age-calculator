import React from 'react'
import './AgeCalculator.css'
import { useState } from 'react'

const AgeCalculator = () => {

    const [birthDate, setBirthDate] = useState('')
    const [age, setAge] = useState(0)

    const calculateAge = ()=>{
        const today = new Date()
        const Userbirthdate = new Date(birthDate)
        const age = today.getFullYear() - Userbirthdate.getFullYear()
        setAge(age)

    }

    const Reset = ()=>{

    }

    return (
        <div className='Container'>
            <h2 className="heading container_title">Age Calculator</h2>
            <p className="para container_title">The Age Calculator can determines the age or interval between two dates. The calculated age will be displayed in Years.</p>
            <div className="Container_middle">

                <div className="right">
                    <h4>Date of Birth</h4>
                    <input type="date" className='date' value={birthDate} onChange={(e)=> setBirthDate(e.target.value)}/>
                    <div className="button_div">
                        <button className="button-65" onClick={calculateAge}>Calculate Age</button>
                        <button className="button-65" onClick={Reset}>Reset</button>
                    </div>
                </div>

                <div className="left">
                    <div className="Container_middle_para">
                        <h1>Your Age Is</h1>
                    </div>
                    <h1>{age}</h1>
                </div>
            </div>
        </div>
    )
}

export default AgeCalculator
