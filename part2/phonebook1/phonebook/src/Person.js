import React from "react"

const Person = ({name,number}) => {
    return (
    <div>
        <div> {name} {number}</div>
        
    </div>
    )
    
}

const Persons = ({persons, filter}) => {
    let filtered = persons;
    if(filter){
        filtered = persons.filter(person=> new RegExp(filter,"i").test(person.name))
    }
    return filtered.map(person=> <Person key={person.name} name={person.name} number={person.number}/>)
}

export default Persons