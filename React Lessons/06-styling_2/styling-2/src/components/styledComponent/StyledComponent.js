import React from 'react'
import {MyButton} from './button/MyButton'
import Header from "./header/Header";
import Wrapper from './wrapper/Wrapper';
import Link from './link/Link';

const StyledComponent = () => {
  return (
    <Wrapper bgColor="orange">
    <Header baslikRenk="blue">Hello World!</Header>
    <Link href='https://wwww.clarusway.com' target="_blank" rel='noopener' secondary>Clarusway</Link>
    <MyButton renk={true}>Mavi Btn</MyButton>
    <MyButton>Mor Btn</MyButton>
    </Wrapper>
  
  )
}

export default StyledComponent