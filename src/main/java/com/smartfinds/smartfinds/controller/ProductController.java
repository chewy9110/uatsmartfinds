package com.smartfinds.smartfinds.controller;


import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


    @CrossOrigin
    @GetMapping("/{ownerid}")
    public Product findProductById(@PathVariable Integer id) {
        return productService.findById( id );
    }


    @CrossOrigin
    @DeleteMapping("/{ownerid}")
    public void delete(@PathVariable Integer id) {
        productService.delete( id );
    }





}
