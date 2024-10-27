package com.libraryproject.spring_boot_library.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Column(name="user_email")
    private String userEmail;
    @Column(name="date")
    @CreationTimestamp
    private Date date;
    @Column(name="book_id")
    private Long bookId;
    @Column(name="rating")
    private double rating;
    @Column(name="description")
    private String description;
}
