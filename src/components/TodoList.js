import React, { useState } from 'react';

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTarea = () => {
    const newTarea = {
      id: Math.random(),
      nombre: input,
      terminada: false,
    };

    setList([...list, newTarea]);

    setInput('');
  };

  const deleteTarea = (id) => {
    const newTarea = list.filter((tarea) => tarea.id !== id);
    setList(newTarea);
  };

  const darCheck = (id) => {
    const updatedList = list.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, terminada: !tarea.terminada };
      }
      return tarea;
    });

    setList(updatedList);
  };

  return (
    <div>
      <h1>Lista de quehaceres</h1>
      <input className="input-style"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTarea}>Agregar Tarea</button>
      <hr/>
      {list.map((tarea) => (
        <div key={tarea.id} className={tarea.terminada ? 'completed' : ''}>
          <input
            type="checkbox" 
            checked={tarea.terminada}
            onChange={() => darCheck(tarea.id)}
          />
          <span>{tarea.nombre}</span>
          <button className='button-style' onClick={() => deleteTarea(tarea.id)}>Eliminar</button>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
