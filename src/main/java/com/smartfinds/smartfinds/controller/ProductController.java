package com.smartfinds.smartfinds.controller;


import com.smartfinds.smartfinds.component.FileUploadUtil;
import com.smartfinds.smartfinds.controller.dto.ProductDto;
import com.smartfinds.smartfinds.repository.ProductRepository;
import com.smartfinds.smartfinds.repository.ProductWatchList;
import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Value("${image.folder}")
    private String imageFolder;


    final ProductService productService;

    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }


   /* @CrossOrigin
    @GetMapping("/")
    public String viewHomePage(Model model) {
        return getProductPagination(1, model);
    }*/


    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Product> getProduct()
    {
        return productService.displayAll();
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


    /*@Autowired
    private ProductRepository productRepository;
    @CrossOrigin
    @GetMapping("/pagination")
    public ResponseEntity<List<Product>> getProductPagination(@RequestParam int page, @RequestParam  int size){
        Pageable pageable = PageRequest.of(page, size);
        List<Product> list = (List<Product>) productRepository.findAll(pageable).getContent();
        return ResponseEntity.ok(list);
        //http://localhost:8080/product/pagination?page=0&size=6 => for testing in thunderclient
    }*/


   /* @CrossOrigin
    @GetMapping("/product/{pageNo}")
    public ResponseEntity<List<Product>> getProductPagination(@PathVariable (value = "pageNo") int pageNo, Model model){
        int pageSize = 6;

        Page<Product> page = productService.getProductPagination(pageNo, pageSize);
        List<Product> listProduct = page.getContent();
        model.addAttribute("currentPage", pageNo);
        model.addAttribute("totalPages", page.getTotalPages());
        model.addAttribute("totalProduct", page.getTotalElements());
        model.addAttribute("listProduct", listProduct);
        return ResponseEntity.ok(listProduct);
    }*/



    @CrossOrigin
    @PostMapping("/add")
    public void save(
            //@RequestParam(name="productid", required = true) Integer productid,
            @RequestParam(name="ownerid", required = true) Long ownerid,
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
            @RequestParam(name="imagefile1", required = true) MultipartFile multipartFile1,
            @RequestParam(name="imagefile2", required = false) MultipartFile multipartFile2,
            @RequestParam(name="imagefile3", required = false) MultipartFile multipartFile3) throws IOException {
// generate dateUpdated value from system date/time
        if (multipartFile1 != null) {
            String fileName1 = StringUtils.cleanPath(multipartFile1.getOriginalFilename());
            FileUploadUtil.saveFile(imageFolder, fileName1.replaceAll("\\s", ""), multipartFile1);
        }

        if (multipartFile2 != null) {
            String fileName2 = StringUtils.cleanPath(multipartFile2.getOriginalFilename());
            FileUploadUtil.saveFile(imageFolder, fileName2.replaceAll("\\s", ""), multipartFile2);
        }

        if (multipartFile3 != null) {
            String fileName3 = StringUtils.cleanPath(multipartFile3.getOriginalFilename());
            FileUploadUtil.saveFile(imageFolder, fileName3.replaceAll("\\s", ""), multipartFile3);
        }

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
    @CrossOrigin
    @GetMapping("/owner/{id}")
    public List<Product> findByOwnerId(@PathVariable Long id) {
        return productService.findByOwnerId(id);
    }

    @CrossOrigin
    @GetMapping("/notowner/{id}")
    public List<Product> findNotByOwnerId(@PathVariable Long id) {
        return productService.findNotByOwnerId(id);
    }

    @CrossOrigin
    @PutMapping("/sold/{id}")
    public Product setSold(@PathVariable Integer id,
                           @RequestParam(name="soldStatus", required = true) Boolean status
    ) {
        Product product = productService.findById( id );
        product.setSoldStatus(status);
        return productService.save(product);
    }

    @CrossOrigin
    @PutMapping("/update/{id}")
    public Product updateItem(@PathVariable Integer id,
                           @RequestParam(name="title", required = true) String title,
                           @RequestParam(name="description", required = true) String description,
                           @RequestParam(name="imageUrl1", required = false) String imageUrl1,
                           @RequestParam(name="imageUrl2", required = false) String imageUrl2,
                           @RequestParam(name="imageUrl3", required = false) String imageUrl3,
                           @RequestParam(name="price", required = true) double price,
                           @RequestParam(name="imagefile1", required = false) MultipartFile multipartFile1,
                           @RequestParam(name="imagefile2", required = false) MultipartFile multipartFile2,
                           @RequestParam(name="imagefile3", required = false) MultipartFile multipartFile3) throws IOException {
        Product product = productService.findById( id );
        // need to consider deleting old files if new files are provided
        if (multipartFile1 != null) {
            String fileName1 = StringUtils.cleanPath(multipartFile1.getOriginalFilename());
            FileUploadUtil.saveFile(imageFolder, fileName1.replaceAll("\\s", ""), multipartFile1);
        }
        if (multipartFile2 != null) {
            String fileName2 = StringUtils.cleanPath(multipartFile2.getOriginalFilename());
            FileUploadUtil.saveFile(imageFolder, fileName2.replaceAll("\\s", ""), multipartFile2);
        }
        if (multipartFile3 != null) {
            String fileName3 = StringUtils.cleanPath(multipartFile3.getOriginalFilename());
            FileUploadUtil.saveFile(imageFolder, fileName3.replaceAll("\\s", ""), multipartFile3);
        }

        String url1 = "", url2 = "", url3 = "";
        System.out.println(imageUrl1);
        System.out.println(imageUrl2);
        System.out.println(imageUrl3);
        if (! imageUrl1.equals("")) { // this is not to save url as products/ if filename is "" results in 404 error when retrieved
            url1 = imageFolder + "/" + imageUrl1.replaceAll("\\s", ""); // remove white space within a filename e.g. "file abc"
        }
        if (! imageUrl2.equals("")) {
            url2 = imageFolder + "/" + imageUrl2.replaceAll("\\s", "");
        }
        if (! imageUrl3.equals("")) {
            url3 = imageFolder + "/" + imageUrl3.replaceAll("\\s", "");
        }

        product.updateProduct(title, description, url1, url2, url3, price);
        return productService.save(product);
    }

    @CrossOrigin
    @PutMapping("/delete/{id}")
    public Product setDelete(@PathVariable Integer id,
                             @RequestParam(name="deleteStatus", required = true) Boolean status
    ) {
        Product product = productService.findById( id );
        product.setDeleteStatus(status);
        return productService.save(product);
    }

    @CrossOrigin
    @GetMapping("/pwuser/{userid}")
    public List<ProductWatchList> getProductWatchList(@PathVariable Long userid)
    {
        return productService.getProductWatchList(userid);
    }

    @CrossOrigin
    @GetMapping("/pwnotowner/{userid}")
    public List<ProductWatchList> getProductWatchListNotUser(@PathVariable Long userid)
    {
        return productService.getProductWatchListNotUser(userid);
    }

    @CrossOrigin
    @GetMapping("/pwall")
    public List<ProductWatchList> getProductWatchListAll()
    {
        return productService.getProductWatchListAll();
    }
}