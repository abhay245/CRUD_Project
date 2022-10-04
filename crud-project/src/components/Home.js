import React from 'react'
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';
function Home(){
    let history=useNavigate();
    const handleEdit=(name,EmpId)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('EmpId',EmpId);
    }
    const handleDelete=(id)=>{
        var index=Employees.map(function(e){
            return e.id
        }).indexOf(id);
        Employees.splice(index,1);
        history('/')
    }
    return(
        <div>
            <div >
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Employee Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            Employees && Employees.length>0
                            ?
                            Employees.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.EmpId}</td>
                                        <td>{item.name}</td>
                                        <td>
                                        <Button onClick={()=>handleDelete(item.EmpId)}>Delete</Button>
                                        &nbsp;</td>
                                    </tr>
                                )
                            })
                            :
                            'no data available'
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grip gap-2' to="/create">
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
            
        </div>
    )
    
}
export default Home;