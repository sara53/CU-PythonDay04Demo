import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export  function Login() {

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
    }
  return (
    <div className='container mt-5'>
      <Form onSubmit={loginFun}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={getUsernameValue} type="text" name="username" placeholder="Enter username" />
        <Form.Text className="text-muted">
         {usernameData}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={getAgeValue} type="number" placeholder="Enter Your Age" />
        <Form.Text className="text-muted">
         {ageData}
        </Form.Text>
      </Form.Group>
      <Button variant="dark" type="submit">
        Login
      </Button>
    </Form>
    </div>
  )
}

