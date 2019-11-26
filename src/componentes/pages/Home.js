import React from 'react';
import React, { fragment } from 'react';
import Input from '../input/Input';
import Button from './button/Button'



class Home extends React.Component {
    constructor (){
        super();
        this.state={ 
            value: "Day"
        }
    }

    // let value ="";
     onChangeInput=(element) =>{
       let value= element.target.value
       this.setState({value: value})


    render(){
        return(
            <Input placeholder="Digite seu nome" tipo="text" change={this.onChangeInput}></Input> 

    //   <Input placeholder="Digite sua senha" tipo="password"></Input>
    //   <Input placeholder="Digite sua idade" tipo="number" ></Input> 

          
      <p > {this.state.value}</p> 
      </Button>

    );
    }
}
export default Home