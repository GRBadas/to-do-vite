/* eslint-disable react/prop-types */
import styles from './header.module.css'
import images from '../../assets/logotipo.png'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from 'react'

export function Header({ handleAddTask }) {
    const [title, setTitle] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
  
      handleAddTask(title);
      setTitle('');
    }
  
    function onChangeTitle(event) {
      setTitle(event.target.value);
    }
  
    return (
      <header className={styles.header}>
        <img src={images} />
  
        <form onSubmit={handleSubmit} className={styles.newTaskForm}>
          <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
          <button>Create <AiOutlinePlusCircle size={20} /></button>
        </form>
      </header>
    )
  }