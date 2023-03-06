package com.corsojava.fotoalbum.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corsojava.fotoalbum.model.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
	public List<Photo> findByTitleContainingIgnoreCase(String title);

	public List<Photo> findByTagContainingIgnoreCase(String tag);
}
