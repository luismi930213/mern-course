import React, { useReducer } from 'react';

import './Input.css'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'onChange':
            return {
                ...state,
                value: action.val,
                isValid: true
            }
        default:
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '' });

    const changeHandler = event => {
        dispatch({ type: 'onChange', val: event.target.value });
    }

    const input = <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} />
    const textarea = <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value} />
    const element = props.element === 'input' ? input : textarea;
    return <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
}

export default Input;