package com.smartfinds.smartfinds.repository;

import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.repository.entity.Watchlist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.persistence.Entity;
import java.util.Date;
import java.util.List;

public interface WatchlistRepository extends CrudRepository<Watchlist, Integer> {
    // #{#entityName} resolves to "Watchlist"
//    @Entity()
//    public class Watchlist {}
//    @Query("SELECT(*) FROM WATCHLIST", nativeQuery=true)
//    List<Watchlist> findAll(int watchlistid, int userid, int productid, Date dateUpdated, boolean deleteStatus);


    //            join " + "Product p on w.productid=p.productid")
    @Query("SELECT w, p FROM Watchlist w join Product p on w.productid=p.productid WHERE w.userid = :userid and w.deleteStatus=false order by w.dateUpdated desc")
    List<Watchlist> findbyOwnerId(@Param("userid") Integer userid);

}
