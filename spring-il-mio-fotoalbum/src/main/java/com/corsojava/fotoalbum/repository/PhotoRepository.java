package com.corsojava.fotoalbum.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corsojava.fotoalbum.model.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
	
}
