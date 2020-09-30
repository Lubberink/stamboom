package com.javaapi.familyapi.controller;

import com.javaapi.familyapi.model.Person;
import com.javaapi.familyapi.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin
@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping(value = "/person/get/all")
    private Iterable<Person> getAllPersons(){
        return personService.getAllPersons();
    }

    @PostMapping(value = "/person/save")
    private Person savePerson(@RequestBody Person person){
        return personService.savePerson(person);
    }

    @PostMapping(value = "/person/add")
    private Person addParent(@RequestBody Person person){
        return personService.addPerson(person);
    }

    @PostMapping(value = "/person/update")
    private Person updatePerson(@RequestBody Person person){
        return personService.updatePerson(person);
    }

    @PostMapping(value="/person/add/testdata")
    private Iterable<Person> addTestData(@RequestBody Set<Person> personSet) {
        return personService.addPersons(personSet);
    }
}
