import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 5px;
  width: 299px;
  height: 108px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const TaskText = styled.span`
  flex-grow: 1;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: #000000;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-left: 5px;
`;

const AddButton = styled.button`
  display: block;
  width: 300px;
  padding: 10px;
  background-color: #E3F3FF;
  color: #000000;
  border: 1px dashed #3E85F3;
  border-radius: 8px;
  cursor: pointer;
  

  &:hover {
    background-color: #3E85F3;
    color: #ffffff;
  }
`;

// SVG icons


const PlusIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
    <title>add</title>
    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6667" stroke="#000" d="M16 10.667v10.667M10.667 16h10.667M29.333 16c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333c0-7.364 5.97-13.333 13.333-13.333s13.333 5.97 13.333 13.333z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32">
    <title>arrow-circle</title>
    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6" stroke="#000" d="M4.451 9.333c2.305-3.985 6.614-6.667 11.55-6.667 7.364 0 13.333 5.97 13.333 13.333s-5.97 13.333-13.333 13.333c-4.935 0-9.244-2.681-11.55-6.667"></path>
    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6" stroke="#000" d="M16 21.333l5.333-5.333-5.333-5.333"></path>
    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="4" strokeWidth="2.6" stroke="#000" d="M2.667 16h18.667"></path>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.333 28.667l7.399-2.846c0.473-0.182 0.71-0.273 0.931-0.392 0.197-0.106 0.384-0.227 0.56-0.364 0.198-0.154 0.378-0.333 0.736-0.692l15.040-15.040c1.473-1.473 1.473-3.861 0-5.333s-3.861-1.473-5.333 0l-15.040 15.040c-0.359 0.359-0.538 0.538-0.692 0.736-0.137 0.176-0.259 0.364-0.364 0.561-0.119 0.221-0.21 0.458-0.392 0.931l-2.846 7.399zM3.333 28.667l2.744-7.135c0.196-0.511 0.295-0.766 0.463-0.883 0.147-0.102 0.329-0.141 0.505-0.107 0.201 0.038 0.395 0.232 0.782 0.619l3.012 3.012c0.387 0.387 0.58 0.58 0.619 0.782 0.034 0.176-0.005 0.358-0.107 0.505-0.117 0.168-0.372 0.267-0.883 0.463l-7.135 2.744z" />
  </svg>
);

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4h8" />
    <path d="M4 8h24" />
    <path d="M6.667 8l0.801 12.018c0.149 2.231 0.223 3.347 0.588 4.243 0.662 1.627 2.004 2.883 3.672 3.435 0.919 0.304 2.037 0.304 4.273 0.304v0c2.236 0 3.354 0 4.273-0.304 1.668-0.552 3.009-1.808 3.671-3.435 0.365-0.896 0.439-2.012 0.588-4.243l0.801-12.018" />
  </svg>
);

export const TaskList = () => {
  const [list, setList] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      todo: 'New Task',
    };

    setList([...list, newTodo]);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const handleTaskEdit = (id, updatedTodo) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo };
      }
      return todo;
    });

    setList(updatedList);
  };

  return (
    <Container>





      <Heading>
        ToDo
        <Button onClick={addTodo}><PlusIcon /></Button>
      </Heading>

      <List>
        {list.map((todo) => (
          <ListItem key={todo.id}>
            <TaskText
              contentEditable
              onBlur={(e) => handleTaskEdit(todo.id, e.target.innerText)}
            >
              {todo.todo}
            </TaskText>
            <ButtonContainer>
              <Button>{CheckIcon()}</Button>
              <Button>{EditIcon()}</Button>
              <Button onClick={() => deleteTodo(todo.id)}>{DeleteIcon()}</Button>
            </ButtonContainer>
          </ListItem>
        ))}
      </List>
      <AddButton onClick={addTodo}>Add Task</AddButton>
    </Container>
  );
};

export default TaskList;
