package com.smartfinds.smartfinds.service;

import java.util.List;
import com.smartfinds.smartfinds.repository.entity.Product;



public interface ProductService {

    List<Product> all();

    Product save(Product product);

    void delete (int productid);

    Product findById(int productid);
}
