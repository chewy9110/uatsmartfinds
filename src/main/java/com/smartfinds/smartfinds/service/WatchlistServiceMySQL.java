package com.smartfinds.smartfinds.service;

import com.smartfinds.smartfinds.repository.WatchlistRepository;
import com.smartfinds.smartfinds.repository.entity.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WatchlistServiceMySQL implements WatchlistService {

    private final WatchlistRepository watchlistRepository;

    public WatchlistServiceMySQL(@Autowired WatchlistRepository watchlistRepository)
    {
        this.watchlistRepository = watchlistRepository;
    }

    @Override
    public Watchlist save(Watchlist watchlist) {
        return watchlistRepository.save(watchlist);   //CrudRepository object
    }

    @Override
    public void delete(int watchlistWatchlistid) {
        watchlistRepository.deleteById(watchlistWatchlistid);
    }
    //or: public void delete(int watchlistid) {watchlistRepository.deleteById(watchlistid);}

    @Override
    public List<Watchlist> all() {
        List<Watchlist> result = new ArrayList<>();
        watchlistRepository.findAll().forEach(result :: add);
        return result;
    }

    @Override
    public Watchlist findById(int watchlistWatchlistid) {  //update product info and delete a product
        // or: public Watchlist findById(int watchlistid)

        //item is an object
        Optional<Watchlist> watchlist = watchlistRepository.findById(watchlistWatchlistid); //cannot be a null
        //or: Optional<Watchlist> watchlist = watchlistRepository.findById(watchlistid);
        Watchlist watchlistResponse = watchlist.get();

        return watchlistResponse;
    }
}