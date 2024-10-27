package com.libraryproject.spring_boot_library.repository;

import com.libraryproject.spring_boot_library.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

// @RequestParam, Spring MVC Controller sınıflarında kullanılır
// ve HTTP GET veya POST gibi isteklerde URL'den gelen parametreleri metoda bağlamak için kullanılır.
//Pageable parametresi, sorgunun sonucunda hangi sayfa ve kaç kayıt döneceğini belirlemek için kullanılır.

public interface BookRepository extends JpaRepository<Book, Long> {

    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    Page<Book> findByCategory(@RequestParam("category") String category, Pageable pageable);

    @Query("select o from Book o where id in :book_ids")
    List<Book> findBooksByBookIds (@Param("book_ids") List<Long> bookId);
}
