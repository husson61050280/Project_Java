package com.example.demo.ProvinceAPI;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@Data
public class Result {

    @JsonProperty("include_total")
    private boolean includeTotal;

    @JsonProperty("resource_id")
    private String resourceId;

    @JsonProperty("fields")
    private List<Field> fields;

    @JsonProperty("records_format")
    private String recordsFormat;

    @JsonProperty("records")
    private List<Record> records;

    private Integer limit;

    @JsonProperty("_links")
    private Links links;

    private Integer total;

}
