package com.authentification.spring.security.login.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.authentification.spring.security.dto.Fly;

@RestController
@RequestMapping("/api/fly")
public class FlyController {
    @Value("${external.api.url}")
    private String externalApiUrl;
    @GetMapping("/search")
    public Fly[] searchHotel(@RequestParam(required = true) String dept,@RequestParam(required = true)  String dest,@RequestParam(required = false)  String dateDept,
    @RequestParam(required = false)  String dateRet,
    @RequestParam(required = false)  long priceMin,
    @RequestParam(required = false)  long priceMax) {
      RestTemplate restTemplate = new RestTemplate();
      String hotelResourceUrl = externalApiUrl+"fly/search?dept="+dept+"&dest="+dest+"&dateDept="+dateDept+"&dateRet="+dateRet+"&priceMin="+priceMin+"&priceMax="+priceMax;
      ResponseEntity<Fly[]> response = restTemplate.getForEntity(hotelResourceUrl,Fly[].class);
      return response.getBody();
    }
}
