package com.smartfinds.smartfinds.service;

import com.smartfinds.smartfinds.repository.entity.Watchlist;

import java.util.List;

public interface WatchlistService {

    List<Watchlist> all();

    //this method is used for both add/edit item
    Watchlist save(Watchlist watchlist);

    void delete(int watchlistWatchlistid); //or: void delete(int watchlistid);

    Watchlist findById(int watchlistWatchlistid); //or: Watchlist findById(int watchlistid);

}

