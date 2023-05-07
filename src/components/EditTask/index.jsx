/* eslint-disable react/prop-types */
import { useState } from "react";


export default function EditForm({ editedTask, updateTask }) {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.title)

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div 
        role="dialog" 
        aria-labelledby="editTask" 
        // onClick={}
        >
            <input
                type="text"
                className="editTask"
                value={updatedTaskName}
                onInput={(e) => setUpdatedTaskName(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder="Editar tarefa"
            />
            <label
                htmlFor="editTask"
                className="label"
            >Editar tarefa</label>
        </div>
        <button
            className="btn"
            aria-label={'Confirm'}
            type="submit"
        ></button>
        </div>
        
    )
}