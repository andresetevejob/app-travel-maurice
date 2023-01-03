package com.authentification.spring.security.login.controllers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.authentification.spring.security.dto.HotelDTO;

@RestController
@RequestMapping("/api/hotel")
public class HotelController {

  @Value("${external.api.url}")
  private   String externalApiUrl;
  @GetMapping("/search")
  public HotelDTO[] searchHotel(@RequestParam(required = true) String cityCode,@RequestParam(required = false)  String dateIn,@RequestParam(required = false)  String dateOut,
  @RequestParam(required = false)  int guests,@RequestParam(required = false)  long priceMin,@RequestParam(required = false)  long priceMax) {
    RestTemplate restTemplate = new RestTemplate();
    String hotelResourceUrl = externalApiUrl+"hotel/find-by-name?name="+cityCode+"&dateIn="+dateIn+"&dateOut="+dateOut+"&guests="+guests+"&priceMin="+priceMin+"&priceMax="+priceMax;
    ResponseEntity<HotelDTO[]> response = restTemplate.getForEntity(hotelResourceUrl,HotelDTO[].class);
    return response.getBody();
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/mod")
  @PreAuthorize("hasRole('MODERATOR')")
  public String moderatorAccess() {
    return "Moderator Board.";
  }

  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }
}
