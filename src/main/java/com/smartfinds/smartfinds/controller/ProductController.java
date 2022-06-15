package com.smartfinds.smartfinds.controller;


import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

    final ProductService productService;

    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Product> getProduct()
    {
        return productService.all();
    }




}
