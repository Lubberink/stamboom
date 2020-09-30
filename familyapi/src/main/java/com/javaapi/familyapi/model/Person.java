package com.javaapi.familyapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.Relationship;

import javax.persistence.*;

import java.util.Set;

@NodeEntity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    @Id
    @GeneratedValue
    private Long id;
    private String firstname;
    private String lastname;
    private String nickname;
    private String birthDate;
    private String deathDate;
    private String gender;

    private String maidenName;

    @JsonProperty("partner")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", nullable = true)
    @Relationship(type= "partner_of", direction = Relationship.INCOMING)
    private Person partner;

    @JsonProperty("father")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", nullable = true)
    @Relationship(type= "has_father", direction = Relationship.OUTGOING)
    private Person father;

    @JsonProperty("mother")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", nullable = true)
    @Relationship(type= "has_mother", direction = Relationship.OUTGOING)
    private Person mother;

    @JsonProperty("children")
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", nullable = true)
    @Relationship(type= "has_child", direction = Relationship.INCOMING)
    private Set<Person> children;

    @JsonProperty("stepmothers")
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", nullable = true)
    @Relationship(type= "has_stepmother", direction = Relationship.OUTGOING)
    private Set<Person> stepmothers;

    @JsonProperty("stepfather")
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", nullable = true)
    @Relationship(type= "has_stepfather", direction = Relationship.OUTGOING)
    private Set<Person> stepfathers;

    private String profession;
    private String education;

    private String creationDate;
    private String lastModified;

}
