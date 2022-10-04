import React,{useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';
export default function Add(){
    const[name,setName]=useState('');
    const[EmpId,setEmpId]=useState('');
    let history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        // const ids=uuid();
        // let uniqueId=ids.slice(0,8);
        let a=name,b=EmpId;
        Employees.push({name:a,EmpId:b});
        history("/")
    }
    return(
        <div>
            <Form className='d-grip gap-2' style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId='formName'>
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}>                       
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formName'>
                    <Form.Control type="text" placeholder="Enter Employee Id" required onChange={(e)=>setEmpId(e.target.value)}>                        
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}