package com.javaapi.familyapi.repository;

import com.javaapi.familyapi.model.Person;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface PersonRepository extends Neo4jRepository<Person, Long> {
}
