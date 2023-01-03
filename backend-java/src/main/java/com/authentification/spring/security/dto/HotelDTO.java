package com.authentification.spring.security.dto;

public class HotelDTO {
    private String name;
    private String cityCode;
    private Contact contact;
    private Offer[] offers;
    private Adresse adresse;

    public String getName() {
        return name;
    }
    public String getCityCode() {
        return cityCode;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setCityCode(String cityCode) {
        this.cityCode = cityCode;
    }
    public Contact getContact() {
        return contact;
    }
    public void setContact(Contact contact) {
        this.contact = contact;
    }
    public Offer[] getOffers() {
        return offers;
    }
    public void setOffers(Offer[] offers) {
        this.offers = offers;
    }
    public Adresse getAdresse() {
        return adresse;
    }
    public void setAdresse(Adresse adresse) {
        this.adresse = adresse;
    }
    
}
