package com.smartfinds.smartfinds.service;

import java.awt.print.Pageable;
import java.util.List;
import com.smartfinds.smartfinds.repository.entity.Product;
import org.springframework.data.domain.Page;


public interface ProductService {

    List<Product> all();

    Product save(Product product);

    void delete (int productid);

    Product findById(int productid);


    Page<Product> getProductPagination(int pageNo, int pageSize);
}
