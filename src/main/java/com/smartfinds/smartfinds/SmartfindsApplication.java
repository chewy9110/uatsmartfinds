package com.smartfinds.smartfinds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
public class SmartfindsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartfindsApplication.class, args);
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();
		System.out.println(dtf.format(now));
		   System.out.println("-------------------------------- ");
		   System.out.println("--- SmartFinds Server started -- ");
		   System.out.println("-------------------------------- ");
		   System.out.println(dtf.format(now) + " - Server running");
	}

}
