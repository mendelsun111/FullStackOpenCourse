import React, { useState } from 'react'
import Persons from './Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [filter, setFilter] = useState('')
  const addName = (event)=>{
    event.preventDefault();

    const nameObject = {
        name: newName,
        id:persons.length+1,
        phone: newPhone,
    }
    console.log(nameObject)
    for(let i=0; i<persons.length;i++){
        if(newName===persons[i].name){
            return alert(`${newName} is already added to phonebook`)
        }
    }
    setPersons(persons.concat(nameObject))
    console.log(persons.concat(nameObject))
    setNewName("")
   // console.log(event.target)
  }
  const handleNameChange = (event) =>{
      //console.log(event.target.value)
      setNewName(event.target.value);

  }
  const handlePhoneChange = (event) =>{
      setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
       filter shown with <input value={filter} onChange={handleFilterChange}/>
      <form onSubmit={addName}>
        <div>
        
          name: <input value={newName} onChange={handleNameChange} />
          
        </div>
        <div>
            number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filter={filter} />

      </ul>
      
    </div>
  )
}

export default App