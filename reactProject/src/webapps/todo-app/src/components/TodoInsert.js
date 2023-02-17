import React, { useCallback, useRef, useState } from 'react';
import './TodoInsert.scss';
import { MdAdd } from "react-icons/md";

const TodoInsert = ({onInsert}) => {
    const inputEl = useRef(null);
    const [value, setValue] = useState("");

    const onInsert_click = useCallback(e => {
        e.preventDefault();
        inputEl.current.focus();
        
        if (value.length === 0) {
            alert("할일을 입력해주세요");
            return;
        }
        onInsert(value);
        setValue("");
    }, [value]);

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return (
        <></>
        // <form className="TodoInsert" onSubmit={onInsert_click}>
        //     <input value={value} placeholder='할 일을 입력하세요' onChange={onChange} ref={inputEl}/>
        //     <button type="submit" ><MdAdd/></button>
        // </form>
    );
};

export default TodoInsert;