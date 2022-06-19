package com.smartfinds.smartfinds.repository.entity;

import com.smartfinds.smartfinds.controller.dto.WatchlistDto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Watchlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer watchlistid; // need to pass the id to a class method findItemById()
    private Integer userid;
    private Integer productid;
    private Date dateUpdated;
    private boolean deleteStatus;

    public Watchlist() {}

    public Watchlist(WatchlistDto watchlistDto) {
        this.userid = watchlistDto.getUserid();
        this.productid = watchlistDto.getProductid();
        this.dateUpdated = watchlistDto.getDateUpdated();
        this.deleteStatus = watchlistDto.isDeleteStatus();
    }

    public Integer getWatchlistid() {
        return watchlistid;
    }

    public void setWatchlistid(Integer watchlistid) {
        this.watchlistid = watchlistid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getProductid() {
        return productid;
    }

    public void setProductid(Integer productid) {
        this.productid = productid;
    }

    public Date getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(Date dateUpdated) {
        this.dateUpdated = dateUpdated;
    }

    public boolean isDeleteStatus() {
        return deleteStatus;
    }

    public void setDeleteStatus(boolean deleteStatus) {
        this.deleteStatus = deleteStatus;
    }


    @Override
    public String toString()
    {
        return "Watchlist{" + "watchlistid=" + watchlistid + ", userid='" + userid + '\'' + ", productid='" + productid + '\'' + ", dateUpdated='"
                + dateUpdated+ '\'' + ", deleteStatus='" + deleteStatus + '}';
    }
}

