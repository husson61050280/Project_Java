package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Covid {
    @JsonProperty("Confirmed")
    private int confirmed;
    @JsonProperty("Recovered")
    private int recovered;
    @JsonProperty("Hospitalized")
    private int hospitalized;
    @JsonProperty("Deaths")
    private int deaths;
    @JsonProperty("NewConfirmed")
    private int newConfirmed;
    @JsonProperty("NewRecovered")
    private int newRecovered;
    @JsonProperty("NewHospitalized")
    private int newHospitalized;
    @JsonProperty("NewDeaths")
    private int newDeaths;
    @JsonProperty("UpdateDate")
    private String updateDate;
    @JsonProperty("Source")
    private String source;
    @JsonProperty("DevBy")
    private String devBy;
    @JsonProperty("SeverBy")
    private String serverBy;

}
