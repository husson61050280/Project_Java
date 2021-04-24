package com.example.demo.ProvinceAPI;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Province {

    @JsonProperty("_id")
    private int id;
    @JsonProperty("PROVINCE_ID")
    private int province_id;
    @JsonProperty("PROVINCE_NAME")
    private String province_name;
    @JsonProperty("LAT")
    private float lat;
    @JsonProperty("LONG")
    private float lng;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProvince_id() {
        return province_id;
    }

    public void setProvince_id(int province_id) {
        this.province_id = province_id;
    }

    public String getProvince_name() {
        return province_name;
    }

    public void setProvince_name(String province_name) {
        this.province_name = province_name;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }
}
