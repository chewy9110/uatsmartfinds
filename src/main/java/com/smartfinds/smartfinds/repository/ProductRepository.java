package com.smartfinds.smartfinds.repository;

import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.repository.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product, Integer> {

    @Query("SELECT p FROM Product p WHERE p.ownerid = :ownerid")
    List<Product> findByOwnerId(@Param("ownerid") Integer ownerid);
}
