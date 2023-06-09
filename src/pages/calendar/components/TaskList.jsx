import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { ArrowCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '../../../assets/icons'
import { Text } from '../../../components'
import { OpacityButton } from '../../../components/'

export const TaskList = () => {
  const [list, setList] = useState([])
  const { colors } = useTheme()

  const addTodo = () => {
    const newTodo = {
      id: Math.random(),
      todo: 'New Task',
    }

    setList([...list, newTodo])
  }

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList)
  }

  const handleTaskEdit = (id, updatedTodo) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo }
      }
      return todo
    })

    setList(updatedList)
  }

  return (
    <Container>
      <Heading>
        <Text type='h5'>To do</Text>
        <OpacityButton onClick={addTodo}>
          <PlusIcon color={colors.text} />
        </OpacityButton>
      </Heading>

      <List>
        {list.map((todo) => (
          <ListItem key={todo.id}>
            <TaskText contentEditable onBlur={(e) => handleTaskEdit(todo.id, e.target.innerText)}>
              {todo.todo}
            </TaskText>
            <ButtonContainer>
              <Button>
                <ArrowCircleIcon color={colors.text} />
              </Button>
              <Button>
                <PencilIcon color={colors.text} />
              </Button>

              <Button onClick={() => deleteTodo(todo.id)}>
                <TrashIcon color={colors.text} />
              </Button>
            </ButtonContainer>
          </ListItem>
        ))}
      </List>
      <AddButton onClick={addTodo}>Add Task</AddButton>
    </Container>
  )
}

export default TaskList

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
`

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

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
`

const TaskText = styled.span`
  flex-grow: 1;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 10px;
  bottom: 10px;
`

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
`

const AddButton = styled.button`
  display: block;
  width: 300px;
  padding: 10px;
  background-color: #e3f3ff;
  color: #000000;
  border: 1px dashed #3e85f3;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #3e85f3;
    color: #ffffff;
  }
`
