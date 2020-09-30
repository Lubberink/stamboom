package com.javaapi.familyapi.config;

import org.neo4j.ogm.session.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.neo4j.ogm.config.Configuration;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.data.neo4j.transaction.Neo4jTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableNeo4jRepositories
@EnableTransactionManagement
public class Neo4jConfig {

    @Bean
    public SessionFactory sessionFactory(){
        return new SessionFactory(configuration(), "com.javaapi.familyapi.model");

    }

    private Configuration configuration() {
        Configuration configuration = new Configuration.Builder()
                .uri("bolt://localhost")
                .credentials("neo4j", "password")
                .build();
        return configuration;
    }

    @Bean
    public Neo4jTransactionManager transactionManager() {
        return new Neo4jTransactionManager(sessionFactory());
    }
}
