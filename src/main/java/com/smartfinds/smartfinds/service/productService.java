package com.smartfinds.smartfinds.service;

import java.util.List;
import com.smartfinds.smartfinds.repository.entity.product;



public interface productService {

    List<product> all();

    product save(product product);

    void delete (int productid);

    product findById(int productid);
}
