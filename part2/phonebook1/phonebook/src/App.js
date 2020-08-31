import React, { useState, useEffect } from 'react'
import Persons from './Person'
import Filter from './Filter'
import PersonForm from './PersonForm'
import './index.css'
import newVariable from './Persons'
import Notification from './Notification'
import Notifications from './Notifications'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [filter, setFilter] = useState('')
  const [addedMessage, setAddedMessage ] = useState(null)
  const [addedError, setAddedError] = useState(null)

  const deleteName= (event) =>{
    const p = persons.find(person=>person.id===event)
    if(window.confirm(`Delete ${p.name}`)){
      newVariable
        .deletePerson(event) 
        .then(newResponse=>{
          setPersons(persons.filter(person=>person.id!==event))
        })
        .catch(error=>{
         setAddedError(`Information of ${p.name} has already been removed from server`)
          setTimeout(()=>{
           setAddedError(null)
         }, 5000)
        console.log(1)
       })
    }
  }
  
  const addName = (event)=>{
    event.preventDefault();
    const nameObject = {
        name: newName,
        number: newPhone,
    }


    for(let i=0; i<persons.length;i++){
        if(newName===persons[i].name){
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
              const filtering = persons.find(n=>n.id===persons[i].id)
              const newNotes = {...filtering, number: newPhone}
              return newVariable
                      .update(persons[i].id, newNotes).then(response=>{
                      console.log(response)
                      setPersons(persons.map(person=>person.id!==persons[i].id?person: response))
                      })
            }
        }
    }
    setAddedMessage(`Added ${newName}`)
    setTimeout(()=>{
      setAddedMessage(null)
    }, 5000)
    
    return newVariable
    .create(nameObject)
    .then(createName=>{
      setPersons(persons.concat(createName))
      setNewName("")
      setNewPhone("")
    })

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
    newVariable
      .getAll()
      .then(initName=>{
        setPersons(initName)
      })
    }, [])

  return (
    <div>

      <h2>Phonebook</h2>
      <Notification message={addedMessage} />
      <Notifications message={addedError} />
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange}
       newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} filter={filter} deleteName={deleteName}/>
      </ul>
      
    </div>
  )
}

export default App