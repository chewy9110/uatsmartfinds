package com.smartfinds.smartfinds.repository.entity;

import com.smartfinds.smartfinds.controller.dto.WatchlistDto;

import javax.persistence.*;
import java.util.Date;

@Entity
//@Table(name = "watchlist")
public class Watchlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer watchlistid; // need to pass the id to a class method findItemById()
    private Integer userid;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "Product_productid", foreignKey = @ForeignKey(name = "fk_watchlist_product") )
    private Integer productid;

    private Date dateUpdated;
    private Boolean deleteStatus;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="productid", insertable=false, updatable=false)
    private Product product;

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

// new getter setter for join query
    public Long getOwnerId() { return product.getOwnerid(); }

    public String getTitle() { return product.getTitle(); }

    public String getDescription() { return product.getDescription(); }

    public String getUrl1() { return product.getImageUrl1(); }
    public String getUrl2() { return product.getImageUrl2(); }
    public String getUrl3() { return product.getImageUrl3(); }

    public Double getPrice() { return product.getPrice(); }

    public Date getPdateUpdated() { return product.getDateUpdated(); }

// new getter setter



    @Override
    public String toString()
    {
        return "Watchlist{" + "watchlistid=" + watchlistid + ", userid='" + userid + '\'' + ", productid='" + productid + '\'' + ", dateUpdated='"
                + dateUpdated+ '\'' + ", deleteStatus='" + deleteStatus + '}';
    }
}

