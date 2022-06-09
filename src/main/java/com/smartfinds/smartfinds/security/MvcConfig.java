package com.smartfinds.smartfinds.security;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class MvcConfig implements WebMvcConfigurer{

    public void addViewControllers(ViewControllerRegistry registry) {
        //Map the browser's URL to a specific View (HTML) inside resources/templates directory
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index.html").setViewName("index");
        registry.addViewController("/aboutus.html").setViewName("aboutus");
        registry.addViewController("/login.html").setViewName("login");
        registry.addViewController("/member.html").setViewName("member");
        registry.addViewController("/watchlist.html").setViewName("watchlist");
        registry.addViewController("/msgDetail.html").setViewName("msgDetail");
        registry.addViewController("/msgInbox.html").setViewName("msgInbox");





    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);
    }


}
