package com.authentification.spring.security.login.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.authentification.spring.security.dto.cityCode;

@RestController
@RequestMapping("/api/cityCode")
public class CityCodeController {
    @Value("${external.api.url}")
    private String externalApiUrl;
    @GetMapping("/findAll")
    public cityCode[] findAll() {
      RestTemplate restTemplate = new RestTemplate();
      String hotelResourceUrl = externalApiUrl+"cityCode/find";
      ResponseEntity<cityCode[]> response = restTemplate.getForEntity(hotelResourceUrl,cityCode[].class);
      return response.getBody();
    }
}
