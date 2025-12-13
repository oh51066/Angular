package com.example.personsapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  private String firstName;

  @NotBlank
  private String familyName;

  @Min(0)
  private Integer age;

  @Embedded
  private Address address = new Address();

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public String getFirstName() { return firstName; }
  public void setFirstName(String firstName) { this.firstName = firstName; }

  public String getFamilyName() { return familyName; }
  public void setFamilyName(String familyName) { this.familyName = familyName; }

  public Integer getAge() { return age; }
  public void setAge(Integer age) { this.age = age; }

  public Address getAddress() { return address; }
  public void setAddress(Address address) { this.address = address; }
}
