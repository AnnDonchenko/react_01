import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function Counter (){
    const counter = useSelector(({counterValue}) => counterValue);
    const dispatch = useDispatch();
    const [incCustom, setIncCustom] = useState('');

    function onSubmit(e){
        let inputValue = e.target.incCustom.value;
        dispatch({type: 'INC_CUSTOM', payload: +inputValue});
        e.preventDefault();
    }
    function onNumberChange(e){
        setIncCustom(e.target.value);
    }
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch({type: 'INC'})}>+1</button>
            <button onClick={() => dispatch({type: 'DEC'})}>-1</button>
            <button onClick={() => dispatch({type: 'DEC5'})}>+5</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
            <form onSubmit={onSubmit}>
                <input name={'incCustom'} type="text" placeholder={'enter number'} onChange={onNumberChange} value={incCustom}/>
                <button>+custom</button>
            </form>
        </div>
    );
}