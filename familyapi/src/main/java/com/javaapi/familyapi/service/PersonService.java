package com.javaapi.familyapi.service;

import com.javaapi.familyapi.model.Person;
import com.javaapi.familyapi.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public Person savePerson(Person person){
        return personRepository.save(person);
    }

    public Person addPerson(Person person){
        return personRepository.save(person);
    }

    public Iterable<Person> getAllPersons(){
        return personRepository.findAll();
    }

    public Person updatePerson(Person person){
        Person originalPerson = personRepository.findById(person.getId()).orElse(null);
        if(originalPerson != null) {
            originalPerson.setFirstname(person.getFirstname());
            originalPerson.setLastname(person.getLastname());
            originalPerson.setBirthDate(person.getBirthDate());
            originalPerson.setDeathDate(person.getDeathDate());
            originalPerson.setEducation(person.getEducation());
            originalPerson.setGender(person.getGender());
            originalPerson.setPartner(person.getPartner());
            originalPerson.setFather(person.getFather());
            originalPerson.setMother(person.getMother());
            originalPerson.setStepfathers(person.getStepfathers());
            originalPerson.setStepmothers(person.getStepmothers());
            originalPerson.setChildren(person.getChildren());
            savePerson(originalPerson);
            return originalPerson;
        }
        return null;
    }

    public Iterable<Person> addPersons(Set<Person> persons){
        return personRepository.saveAll(persons);
    }
}
