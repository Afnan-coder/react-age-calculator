import React from 'react'
import './AgeCalculator.css'

const AgeCalculator = () => {
    return (
        <div className='Container'>
            <h2 className="heading container_title">Age Calculator</h2>
            <p className="para container_title">The Age Calculator can determines the age or interval between two dates. The calculated age will be displayed in Years.</p>
            <div className="Container_middle">

                <div className="right">
                    <h4>Date of Birth</h4>
                    <input type="date" className='date' />
                    <div className="button_div">
                        <button className="button-65">Calculate Age</button>
                        <button className="button-65">Rest</button>
                    </div>
                </div>

                <div className="left">
                    <div className="Container_middle_para">
                        <h1>Your Age Is</h1>
                    </div>
                    <h1>22</h1>
                </div>

            </div>

        </div>
    )
}

export default AgeCalculator
