import React, { useState } from "react"

import Button from "../../UI/Button"

import "./CourseInput.css"

const CourseInput = (props) => {
    const[enteredValue, setEnteredValue] = useState("")
    const[isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if(enteredValue.trim().length === 0) {
            setIsValid(false)
            return
        }
        props.onAddGoal(enteredValue)
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                {/* dynamic inline styles */}
                <label style={{color: !isValid ? "#E91E63" : "black"}}>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} style={{borderColor: !isValid ? "#E91E63" : "", background: !isValid ? "#F8BBD0" : "transparent"}} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseInput
