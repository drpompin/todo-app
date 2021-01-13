import React from "react";
import styled from 'styled-components'


export default function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <p
                style={{
                    'marginBottom': 0
                }}
            >Enter a schedule title in the field below to create a todo</p>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}
