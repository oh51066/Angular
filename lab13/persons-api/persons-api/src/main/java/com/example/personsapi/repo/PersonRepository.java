package com.example.personsapi.repo;

import com.example.personsapi.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(path = "persons")
public interface PersonRepository extends JpaRepository<Person, Long> {
}
