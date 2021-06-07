import styled from 'styled-components'
import {useContext} from 'react'
import {Button} from './components/button'
import {ThemeContext,THEMES} from './context/ThemeContext'

const Container = styled.header`
display:flex;
justify-content: space-between;
border-bottom:1px solid #E0E0E0;
`
const HeaderUl = styled.ul`
 display:flex;
 padding: 24px 64px 0;
 margin: 0;
 `

const HeaderLi = styled.li`
 list-style:none;
 padding: 4px 12px;
 cursor: pointer;
 border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'}
 `

 const HeaderButton = styled(Button)`
 padding:0px;
 margin-bottom:4px;
 `

export const Header = ({tab,setTab}) => {
  const [theme,toggleTheme] = useContext(ThemeContext)
  return (
    <Container>
    <HeaderUl>
      <HeaderLi focused = {tab==='list'} onClick={()=> setTab('list')}>List</HeaderLi>
      <HeaderLi focused = {tab==='form'} onClick={()=> setTab('form')}>Form</HeaderLi>
    </HeaderUl>
    <HeaderButton onClick={toggleTheme}>テーマ変更</HeaderButton>
  </Container>
  )
}