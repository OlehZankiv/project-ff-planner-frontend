import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`;

const AddButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const InputContainer = styled.div`
  margin-top: 20px;
`;

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

    return (
        <Container>
            <Heading>Todo</Heading>
            <List>
                {list.map((todo) => (
                    <ListItem key={todo.id}>
                        {todo.todo}
                        <DeleteButton onClick={() => deleteTodo(todo.id)}>&times;</DeleteButton>
                    </ListItem>
                ))}
            </List>
            <InputContainer>
                <AddButton onClick={addTodo}>Add Task</AddButton>
            </InputContainer>
        </Container>
    );
};

export default TaskList;
