import React from "react"

const Person = ({name,number, deleteName, id}) => {
    return (
    <div>
        <div> {name} {number} <button onClick={()=>deleteName(id)} type="submit">delete</button></div>
        
    </div>
    )
    
}

const Persons = ({persons, filter, deleteName}) => {
    let filtered = persons;
    if(filter){
        filtered = persons.filter(person=> new RegExp(filter,"i").test(person.name))
    }
    return filtered.map(person=> <Person key={person.name} name={person.name} number={person.number} 
        id={person.id} deleteName={deleteName} />)
}

export default Persons