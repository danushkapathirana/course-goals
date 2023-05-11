import React, { useState } from "react"
import styled from "styled-components"

import Button from "../../UI/Button/Button"

import "./CourseInput.css"

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }

    &.invalid input {
        border-color: red;
        background-color: #ffd7d7;
    }

    &.invalid label {
        color: red;
    }
`

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("")
    const [isValid, setIsValid] = useState(true)

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
            {/* dynamic css classes with styled components */}
            <FormControl className={!isValid && "invalid"}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseInput


// dynamic inline styles

{/* <label style={{color: !isValid ? "red" : "black"}}>Course Goal</label>
<input type="text" onChange={goalInputChangeHandler} style={{borderColor: !isValid ? "#ccc" : "black", background: !isValid ? "salmon" : "transparent"}} /> */}


// dynamic css classes

{/* <div className={`form-control ${!isValid ? "invalid" : ""}`}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
</div> */}


// dynamic css classes with styled components

{/* <FormControl className={!isValid && "invalid"}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
</FormControl> */}


// dynamic props with styled components

{/* <FormControl invalid={!isValid}>
    <label>Course Goals</label>
    <input type="text" onChange={goalInputChangeHandler} />
</FormControl> */}

// & input {
//     display: block;
//     width: 100%;
//     /* border: 1px solid #ccc; */
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
// }
