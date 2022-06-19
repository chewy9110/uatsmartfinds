package com.smartfinds.smartfinds.controller.dto;

import java.util.Date;

public class WatchlistDto {

    private Integer userid;
    private Integer productid;
    private Date dateUpdated;
    private boolean deleteStatus;

    public WatchlistDto(Integer userid, Integer productid, Date dateUpdated, boolean deleteStatus)
    {
        this.userid = userid;
        this.productid = productid;
        this.dateUpdated = dateUpdated;
        this.deleteStatus = deleteStatus;
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

}

