package com.authentification.spring.security.dto;

public class Itinerary {
    private String duration;
    private ItineraryInfo departure;
    private ItineraryInfo arrival;
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public ItineraryInfo getDeparture() {
        return departure;
    }
    public void setDeparture(ItineraryInfo departure) {
        this.departure = departure;
    }
    public ItineraryInfo getArrival() {
        return arrival;
    }
    public void setArrival(ItineraryInfo arrival) {
        this.arrival = arrival;
    }
    
}
