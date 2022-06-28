package com.smartfinds.smartfinds.controller;

import com.smartfinds.smartfinds.component.FileUploadUtil;
import com.smartfinds.smartfinds.controller.dto.WatchlistDto;
import com.smartfinds.smartfinds.repository.entity.Product;
import com.smartfinds.smartfinds.repository.entity.Watchlist;
import com.smartfinds.smartfinds.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/watch")
public class WatchlistController {

//    @Value("${image.folder}")
//    private String imageFolder;

    final WatchlistService watchlistService;

    public WatchlistController(@Autowired WatchlistService watchlistService) {
        this.watchlistService = watchlistService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Watchlist> getWatchlist() {
        return watchlistService.all();
    }

    @CrossOrigin
    @GetMapping("/{watchlistid}")
    public Watchlist findWatchlistById(@PathVariable Integer watchlistid) {
        return watchlistService.findById(watchlistid);
    }

    @CrossOrigin
    @DeleteMapping("/{watchlistid}")
    public void delete(@PathVariable Integer watchListID) {
        watchlistService.delete(watchListID);
    }

    @CrossOrigin
    @PutMapping("/delete/{id}")
    public Watchlist setDelete(@PathVariable Integer id,
                           @RequestParam(name="deleteStatus", required = true) Boolean status
    ) {
        Watchlist wl = watchlistService.findById( id );
        wl.setDeleteStatus(status);
        return watchlistService.save(wl);
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestParam(name = "userid", required = true) Integer userid,
                     @RequestParam(name = "productid", required = true) Integer productid,
                     @RequestParam(name="dateUpdated", required = true) Date dateUpdated ) {

        WatchlistDto watchlistDto = new WatchlistDto(userid, productid, dateUpdated, false);
        watchlistService.save(new Watchlist(watchlistDto));
    }

    @CrossOrigin
    @GetMapping("/getbyuser/{watchlistid}")
    public List<Watchlist> findbyOwnerId(@PathVariable Integer watchlistid) {
        return watchlistService.findbyOwnerId(watchlistid);
    }

}
