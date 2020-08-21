import React, { useState } from 'react'
import Person from './Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
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

  return (
    <div>
      <h2>Phonebook</h2>
     
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
        {persons.map((name,i)=>{
            return <Person key={i} arg={name}/>
        })}


      </ul>
      ...
    </div>
  )
}

export default App