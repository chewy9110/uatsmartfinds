package com.smartfinds.smartfinds.service;


import com.smartfinds.smartfinds.repository.ProductRepository;
import com.smartfinds.smartfinds.repository.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceMySQL implements ProductService{

    private final ProductRepository productRepository;

    public ProductServiceMySQL(@Autowired ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }


    @Override
    public void delete (int productid) {
        productRepository.deleteById(productid);
    }

    @Override
    public List<Product> all(){
        List<Product> result = new ArrayList<>();
        productRepository.findAll().forEach(result :: add);
        return result;
    }


    @Override
    public Product findById (int productid){
        Optional<Product> product = productRepository.findById(productid);
        Product productResponse = product.get();

        return productResponse;
    }

}