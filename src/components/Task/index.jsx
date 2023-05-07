/* eslint-disable react/prop-types */
import styles from './task.module.css'
import {TbTrash} from 'react-icons/tb'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {MdEditNote} from 'react-icons/md'

export function Task({ task, onComplete, onDelete, onEdit }) {


    return (

        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

            <button 
            className={styles.deleteButton} 
            onClick={() => onDelete(task.id)}
            >
            <TbTrash size={20}/>
            </button>

            <button 
            onClick={() => onEdit(task.id)}
            className={styles.deleteButton}
            >
                <MdEditNote size={20}/>
            </button>
        </div>
    )
}