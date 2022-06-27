package com.smartfinds.smartfinds.repository.entity;


import com.smartfinds.smartfinds.controller.dto.ProductDto;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productid;
    private Integer ownerid;
    private String title;
    private String description;
    private String imageUrl1;
    private String imageUrl2;
    private String imageUrl3;
    private Integer defaultPic; //do we need this in Dto?
    private double price;
    private Date dateUpdated; //do we need this?
    private boolean soldStatus; //do we need this?
    private boolean deleteStatus; //do we need this?

// join query
@OneToMany(mappedBy = "productid")
private List<Watchlist> watchlistList;
// join query

    public Product() {}

    public Product(ProductDto productDto) {
        //this.productid = productDto.getProductid();
        this.ownerid = productDto.getOwnerid();
        this.title = productDto.getTitle();
        this.description = productDto.getDescription();
        this.imageUrl1 = productDto.getImageUrl1();
        this.imageUrl2 = productDto.getImageUrl2();
        this.imageUrl3 = productDto.getImageUrl3();
        this.defaultPic = productDto.getDefaultPic();
        this.price = productDto.getPrice();
        this.dateUpdated = productDto.getDateUpdated();
        this.soldStatus = productDto.isSoldStatus();
        this.deleteStatus = productDto.isDeleteStatus();
    }

    public Integer getProductid() {
        return productid;
    }

    public void setProductid(Integer productid) {
        this.productid = productid;
    }

    public Integer getOwnerid() {
        return ownerid;
    }

    public void setOwnerid(Integer ownerid) {
        this.ownerid = ownerid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl1() {
        return imageUrl1;
    }

    public void setImageUrl1(String imageUrl1) {
        this.imageUrl1 = imageUrl1;
    }

    public String getImageUrl2() {
        return imageUrl2;
    }

    public void setImageUrl2(String imageUrl2) {
        this.imageUrl2 = imageUrl2;
    }

    public String getImageUrl3() {
        return imageUrl3;
    }

    public void setImageUrl3(String imageUrl3) {
        this.imageUrl3 = imageUrl3;
    }

    public Integer getDefaultPic() {
        return defaultPic;
    }

    public void setDefaultPic(Integer defaultPic) {
        this.defaultPic = defaultPic;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


    public boolean isSoldStatus() {
        return soldStatus;
    }

    public void setSoldStatus(boolean soldStatus) {
        this.soldStatus = soldStatus;
    }

    public boolean isDeleteStatus() {
        return deleteStatus;
    }

    public void setDeleteStatus(boolean deleteStatus) {
        this.deleteStatus = deleteStatus;
    }

    public Date getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(Date dateUpdated) {
        this.dateUpdated = dateUpdated;
    }

    @Override
    public String toString()
    {
        return "Item{" + "productid=" + productid + ", ownerid='" + ownerid + '\'' + ", title='" + title + '\'' + ", description='" + description + '\'' + ", imageUrl1='"
                + imageUrl1 + '\'' + ",imageUrl2='" + imageUrl2 + '\'' + ",imageUrl3='" + imageUrl3 + '\'' +  ",defaultPic='" + defaultPic + '\'' +  ",price='" + price + '\'' +  ",dateUpdated='" + dateUpdated + '\'' +
                ",soldStatus='" + soldStatus + '\'' + ", deleteStatus='" + deleteStatus + '}';
    }

}
