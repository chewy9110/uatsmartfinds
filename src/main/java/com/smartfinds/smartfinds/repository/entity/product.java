package com.smartfinds.smartfinds.repository.entity;

public class product {

    private Integer productid;
    private Integer ownerid;
    private String title;
    private String description;
    private String imageUrl1;
    private String imageUrl2;
    private String imageUrl3;
    private Integer defaultPic;
    private double price;
    private boolean dateUpdated;
    private boolean soldStatus;
    private boolean deleteStatus;

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

    public boolean isDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(boolean dateUpdated) {
        this.dateUpdated = dateUpdated;
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


    @Override
    public String toString()
    {
        return "Item{" + "productid=" + productid + ", ownerid='" + ownerid + '\'' + ", title='" + title + '\'' + ", description='" + description + '\'' + ", imageUrl1='"
                + imageUrl1 + '\'' + ",imageUrl2='" + imageUrl2 + '\'' + ",imageUrl3='" + imageUrl3 + '\'' +  ",defaultPic='" + defaultPic + '\'' +  ",price='" + price + '\'' +  ",dateUpdated='" + dateUpdated + '\'' +
                ",soldStatus='" + soldStatus + '\'' + ", deleteStatus='" + deleteStatus + '}';
    }

}
