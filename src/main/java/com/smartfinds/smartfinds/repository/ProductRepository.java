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

//    @Query("SELECT p, j, u FROM Product p " +
//            "left join (select productid, count(*) as watchcount from Watchlist group by productid) j on p.productid=j.productid " +
//            "left join (select userid, displayName from user) u on p.ownerid=u.userid " +
//            "WHERE p.ownerid = :ownerid and deleteStatus=false order by dateUpdated desc")
    @Query("SELECT p FROM Product p WHERE p.ownerid = :ownerid and deleteStatus=false order by dateUpdated desc")
    List<Product> findByOwnerId(@Param("ownerid") Long ownerid);

//    @Query("SELECT p FROM Product p WHERE p.ownerid = :ownerid and deleteStatus=false order by dateUpdated desc join " +
//            "(select count(*) as watchCount, w.productid from Watchlist w group by w.productid) as c")
//    List<Product> findByOwnerId(@Param("ownerid") Integer ownerid);

    @Query("SELECT p FROM Product p WHERE p.ownerid != :ownerid and deleteStatus=false and soldStatus=false order by dateUpdated desc")
    List<Product> findNotByOwnerId(@Param("ownerid") Long ownerid);



    @Query("SELECT p FROM Product p WHERE deleteStatus=false and soldStatus=false order by dateUpdated desc")
    List<Product> displayAll();





//    @Modifying
//    @Query("update Product p set p.soldStatus = true where p.productid = :productid")
//    Product setSold(@Param("productid") Integer productid);
//
//    @Modifying
//    @Query("update Product p set p.deleteStatus = true where p.productid = :productid")
//    void setDelete(@Param("productid") Integer productid);

    // this query is to get product list based on ownerid, owner image url, with watchlist count
    @Query("SELECT p as product, COUNT(w) as watchListCount, u.displayName as userName, u.userImgUrl as userImgUrl " +
            "FROM Product p " +
            "LEFT JOIN Watchlist w on p.productid=w.productid " +
            "LEFT JOIN User u on p.ownerid=u.userid " +
            "WHERE p.ownerid = :ownerid GROUP " +
            "BY p.productid order by p.dateUpdated desc")
    List<ProductWatchList> getProductWatchList(@Param("ownerid") Long ownerid);

    // query to get all product list that is not owned by ownerid
    @Query("SELECT p as product, COUNT(w) as watchListCount, u.displayName as userName, u.userImgUrl as userImgUrl " +
            "FROM Product p " +
            "LEFT JOIN Watchlist w on p.productid=w.productid " +
            "LEFT JOIN User u on p.ownerid=u.userid " +
            "WHERE p.ownerid != :ownerid GROUP " +
            "BY p.productid order by p.dateUpdated desc")
    List<ProductWatchList> getProductWatchListNotUser(@Param("ownerid") Long ownerid);
//and w.deleteStatus=false

    // query to get all product list not based on any id
    @Query("SELECT p as product, COUNT(w) as watchListCount, u.displayName as userName, u.userImgUrl as userImgUrl " +
            "FROM Product p " +
            "LEFT JOIN Watchlist w on p.productid=w.productid " +
            "LEFT JOIN User u on p.ownerid=u.userid " +
            "GROUP " +
            "BY p.productid order by p.dateUpdated desc")
    List<ProductWatchList> getProductWatchListAll();
//where w.deleteStatus=false
}