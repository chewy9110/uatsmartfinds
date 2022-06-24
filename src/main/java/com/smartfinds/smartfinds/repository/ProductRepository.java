package com.smartfinds.smartfinds.repository;

import com.smartfinds.smartfinds.repository.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> { //JpaRepository

    @Query("SELECT p FROM Product p WHERE p.ownerid = :ownerid and deleteStatus=false order by dateUpdated desc")
    List<Product> findByOwnerId(@Param("ownerid") Integer ownerid);
//    @Query("SELECT p FROM Product p WHERE p.ownerid = :ownerid and deleteStatus=false order by dateUpdated desc join " +
//            "(select count(*) as watchCount, w.productid from Watchlist w group by w.productid) as c")
//    List<Product> findByOwnerId(@Param("ownerid") Integer ownerid);

    @Query("SELECT p FROM Product p WHERE p.ownerid != :ownerid and deleteStatus=false and soldStatus=false order by dateUpdated desc")
    List<Product> findNotByOwnerId(@Param("ownerid") Integer ownerid);

    @Modifying
    @Query("update Product p set p.soldStatus = true where p.productid = :productid")
    void setSold(@Param("productid") Integer productid);

    @Modifying
    @Query("update Product p set p.deleteStatus = true where p.productid = :productid")
    void setDelete(@Param("productid") Integer productid);

}