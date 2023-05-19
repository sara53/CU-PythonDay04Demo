import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export function Login() {
 let navigate = useNavigate();


       /*
 const [usernameData,setUsernameData] =   useState("test")

 let [ageData,setAgeData] =   useState(10)

    let loginFun = (e)=>{
        e.preventDefault();
        console.log("Login")
        console.log(usernameData,ageData)
    }

    let getUsernameValue = (e) =>{
       setUsernameData(e.target.value)
    }

    let getAgeValue = (e) =>{
        setAgeData(e.target.value)
    }*/
    let [formValues,setFormValues] = useState({
        username:'inital username',
        age:10
    })

    let [errors,setErrors] =  useState({
        username:null,
        age:null
    })
 

    let loginFun = (e)=>{
        e.preventDefault();
        console.log("Login")
      console.log( formValues )
      navigate('/products')
  }
  
  /** Nested Routing */
    let operationHandler = (e)=>{

        if(e.target.name == 'username'){
            if(e.target.value.length >=3){
                setFormValues({
                    ...formValues,
                    [e.target.name]:e.target.value
                }) 
                setErrors({
                    ...errors,
                    username:null
                })
               
            }
            else{
                setErrors({
                    ...errors,
                    username:"username Length must br > 3"
                })
            }
        }


        /*
      if(e.target.name == 'username'){
        setFormValues({
            ...formValues,
            username:e.target.value
        })
      }
      if(e.target.name == 'age'){
        setFormValues({
            ...formValues,
            age:e.target.value
        })
      }*/
    }
  return (
    <div className='container mt-5'>
      <Form onSubmit={loginFun}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={operationHandler} type="text" name="username" placeholder="Enter username" />
        <Form.Text className="text-danger">
         {errors.username}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control name="age" onChange={operationHandler} type="number" placeholder="Enter Your Age" />
        <Form.Text className="text-danger">
        {errors.age}
        </Form.Text>
      </Form.Group>
      <Button variant="dark" type="submit">
        Login
        </Button>

    </Form>
    </div>
  )
}



