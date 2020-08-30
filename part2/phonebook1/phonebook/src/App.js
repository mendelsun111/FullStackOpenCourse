import React, { useState, useEffect } from 'react'
import Persons from './Person'
import Filter from './Filter'
import PersonForm from './PersonForm'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([
    
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event)=>{
    event.preventDefault();
    const nameObject = {
        name: newName,
        number: newPhone,
    }

    axios
      .post("http://localhost:3001/persons", nameObject)
      .then(response=>{
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewPhone("")
      })

    for(let i=0; i<persons.length;i++){
        if(newName===persons[i].name){
            return alert(`${newName} is already added to phonebook`)
        }
    }
  
    console.log(persons.concat(nameObject))
 

  }
  const handleNameChange = (event) =>{
      setNewName(event.target.value);
  }
  const handlePhoneChange = (event) =>{
      setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
  }

  useEffect(()=>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response=>{
        console.log("promise fulfilled")
        setPersons(response.data)
      })
    }, [])

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}
       newPhone={newPhone} handlePhoneChange={handlePhoneChange} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filter={filter} />
      </ul>
      
    </div>
  )
}

export default App