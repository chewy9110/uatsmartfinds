package com.smartfinds.smartfinds.service;


import com.smartfinds.smartfinds.repository.ProductRepository;
import com.smartfinds.smartfinds.repository.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    @Override
    public List<Product> findByOwnerId(Long ownerid) {
        List<Product> result = new ArrayList<>();
        productRepository.findByOwnerId(ownerid).forEach(result :: add);

        return result;
    }

    @Override
    public List<Product> findNotByOwnerId(Long ownerid) {
        List<Product> result = new ArrayList<>();
        productRepository.findNotByOwnerId(ownerid).forEach(result :: add);

        return result;
    }

    @Override
    public List<Product> displayAll() {
        List<Product> result = new ArrayList<>();
        productRepository.displayAll().forEach(result :: add);
        return result;
    }

//    @Override
//    public Product setSold(int productid) {
//        return productRepository.setSold(productid);
//    }
//    @Override
//    public void setDelete(int productid) {
//        productRepository.setDelete(productid);
//    }
//
      /* @Override
    public Page<Product> getProductPagination(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo -1, pageSize);
        return this.productRepository.findAll(pageable);
    }*/
}
