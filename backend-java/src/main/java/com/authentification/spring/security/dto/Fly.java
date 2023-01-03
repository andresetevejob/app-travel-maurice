package com.authentification.spring.security.dto;

public class Fly {
    private String dept;
    private String dest;
    private Price price;
    private String duration;
    private Itinerary flyStart;
    private Itinerary flyArrival;
    public String getDept() {
        return dept;
    }
    public void setDept(String dept) {
        this.dept = dept;
    }
    public String getDest() {
        return dest;
    }
    public void setDest(String dest) {
        this.dest = dest;
    }
    public Price getPrice() {
        return price;
    }
    public void setPrice(Price price) {
        this.price = price;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public Itinerary getFlyStart() {
        return flyStart;
    }
    public void setFlyStart(Itinerary flyStart) {
        this.flyStart = flyStart;
    }
    public Itinerary getFlyArrival() {
        return flyArrival;
    }
    public void setFlyArrival(Itinerary flyArrival) {
        this.flyArrival = flyArrival;
    }
    
}
