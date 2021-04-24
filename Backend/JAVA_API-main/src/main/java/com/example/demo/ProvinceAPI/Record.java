package com.example.demo.ProvinceAPI;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;

@Data
public class Record {

    @JsonProperty("_id")
    private int id;

    @JsonProperty("PROVINCE_ID")
    private int provinceId;

    @JsonProperty("PROVINCE_NAME")
    private String provinceName;

    @JsonProperty("LAT")
    private float lat;

    @JsonProperty("LNG")
    private float lng;

}
