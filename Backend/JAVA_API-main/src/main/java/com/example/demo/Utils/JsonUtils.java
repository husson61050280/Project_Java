package com.example.demo.Utils;

import com.example.demo.ProvinceAPI.All;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class JsonUtils {

    private static Logger logger = LogManager.getLogger(JsonUtils.class);
    private static ObjectMapper objectMapper = new ObjectMapper();

    static{
        objectMapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
    }

    public static All convertJsonToAll(String json) throws JsonProcessingException {
        try{
            return objectMapper.readValue(json, All.class);
        }catch(JsonProcessingException jpe){
            logger.error("JsonProcessingException has occurred while processing convertJsonToAll", jpe);
            throw jpe;
        }
    }

}
