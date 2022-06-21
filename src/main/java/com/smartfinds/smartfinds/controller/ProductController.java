package com.smartfinds.smartfinds.controller;


import com.smartfinds.smartfinds.component.FileUploadUtil;
import com.smartfinds.smartfinds.controller.dto.ProductDto;
import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Value("${image.folder}")
    private String imageFolder;


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
    @GetMapping("/{productid}")
    public Product findProductById(@PathVariable Integer productid) {
        return productService.findById( productid );
    }


    @CrossOrigin
    @DeleteMapping("/{productid}")
    public void delete(@PathVariable Integer productid) {
        productService.delete( productid );
    }


    @CrossOrigin
    @PostMapping("/add")
    public void save(
                       //@RequestParam(name="productid", required = true) Integer productid,
                       @RequestParam(name="ownerid", required = true) Integer ownerid,
                       @RequestParam(name="title", required = true) String title,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="imageUrl1", required = false) String imageUrl1,
                       @RequestParam(name="imageUrl2", required = false) String imageUrl2,
                       @RequestParam(name="imageUrl3", required = false) String imageUrl3,
                       @RequestParam(name="defaultPic", required = false) Integer defaultPic,
                       @RequestParam(name="price", required = true) double price,
                       @RequestParam(name="dateUpdated", required = true) Date dateUpdated,
                       @RequestParam(name="soldStatus", required = false) boolean soldStatus,
                       @RequestParam(name="deleteStatus", required = false) boolean deleteStatus,
                       @RequestParam("imagefile") MultipartFile multipartFile) throws IOException {
// generate dateUpdated value from system date/time

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(imageFolder, fileName.replaceAll("\\s", ""), multipartFile);
        String url1 = "", url2 = "", url3 = "";
        if (! imageUrl1.equals("")) { // this is not to save url as products/ if filename is "" results in 404 error when retrieved
            url1 = imageFolder + "/" + imageUrl1.replaceAll("\\s", ""); // remove white space within a filename e.g. "file abc"
        }
        if (! imageUrl2.equals("")) {
            url2 = imageFolder + "/" + imageUrl2.replaceAll("\\s", "");
        }
        if (! imageUrl3.equals("")) {
            url3 = imageFolder + "/" + imageUrl3.replaceAll("\\s", "");
        }
        ProductDto productDto = new ProductDto(ownerid ,title, description, url1, url2, url3, defaultPic, price, dateUpdated, false, false);
        productService.save(new Product(productDto));
    }






}
