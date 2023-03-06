package com.corsojava.fotoalbum.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corsojava.fotoalbum.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
