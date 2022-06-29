package com.smartfinds.smartfinds.repository;

import com.smartfinds.smartfinds.repository.entity.*;

public interface ProductWatchList {
    public Product getProduct();
    public Integer getWatchListCount();
    public String getUserName();
    public String getUserImgUrl();
}
