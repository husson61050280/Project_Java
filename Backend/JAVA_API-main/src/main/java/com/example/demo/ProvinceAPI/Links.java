package com.example.demo.ProvinceAPI;

import lombok.Data;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
public class Links {

    private String start;
    private String next;

}

