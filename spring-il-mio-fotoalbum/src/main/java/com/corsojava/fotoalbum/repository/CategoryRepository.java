package com.corsojava.fotoalbum.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corsojava.fotoalbum.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
