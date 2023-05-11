import React, { useState } from "react"

import Button from "../../UI/Button/Button"

import classes from "./CourseInput.module.css"

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
            {/* dynamic css classes with css modules */}
            <div className={`${classes["form-control"]} ${!isValid && classes.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
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
