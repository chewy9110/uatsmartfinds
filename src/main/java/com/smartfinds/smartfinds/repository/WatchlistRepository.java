package com.smartfinds.smartfinds.repository;

import com.smartfinds.smartfinds.repository.entity.Watchlist;
import com.sun.xml.bind.v2.schemagen.xmlschema.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import javax.persistence.Entity;
import java.util.Date;

public interface WatchlistRepository extends CrudRepository<Watchlist, Integer> {
    // #{#entityName} resolves to "Watchlist"
    @Entity()
    public class Watchlist {}
    @Query("SELECT(*) FROM WATCHLIST", nativeQuery=true)
    List<Watchlist> findAll(int watchlistid, int userid, int productid, Date dateUpdated, boolean deleteStatus);
}
