package com.example.demo;

import com.example.demo.ProvinceAPI.All;
import com.example.demo.ProvinceAPI.Field;
import com.example.demo.ProvinceAPI.Record;
import com.example.demo.ProvinceAPI.Result;
import com.example.demo.Service.RestService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.boot.web.client.RestTemplateBuilder;

import java.io.IOException;

public class RestServiceTest {

    private static Logger logger = LogManager.getLogger(RestServiceTest.class);

    @Test
    public void testCallGetPeopleAsObject() throws IOException, InterruptedException {
        RestService restService = new RestService(new RestTemplateBuilder());
        All all = restService.getProvincesObject();
        logger.info("help: {}", all.getHelp());
        logger.info("success: {}", all.isSuccess());
        Result result = all.getResult();
        logger.info("include_total: {}", result.isIncludeTotal());
        logger.info("resource_id: {}", result.getResourceId());
        result.getFields().stream().forEach((f) -> logField(f));
        logger.info("records_format: {}", result.getRecordsFormat());
        result.getRecords().stream().forEach((r) -> logRecord(r));
        logger.info("limit: {}", result.getLimit());
        logger.info("start link: {}", result.getLinks().getStart());
        logger.info("next link: {}", result.getLinks().getNext());
        logger.info("total: {}", result.getTotal());

        //Expected which 'success' should always be true.
        Assert.assertTrue(all.isSuccess());

        //Expected which 'ResourceId' should be the same with URI parameter.
        Assert.assertEquals("df922923-e009-4dee-92fc-d963a86ce4b8", result.getResourceId());

        //Expected which limit should more than zero
        Assert.assertTrue(result.getLimit() > 0);

        //Expected which start link shouldn't be null
        Assert.assertNotNull(result.getLinks().getStart());

        //Expected which next link shouldn't be null
        Assert.assertNotNull(result.getLinks().getNext());

        //Expected which the record size should equals with limit value
        Assert.assertEquals(result.getLimit().intValue(), result.getRecords().size());
    }

    private void logField(Field field){
        logger.info("field: {} ({})", field.getId(), field.getType());
    }

    private void logRecord(Record record){
        logger.info("records id: {}, province_id: {}, province_name:{}, locattion: ({},{})", record.getId(), record.getProvinceId(), record.getProvinceName(), record.getLat(), record.getLng());
    }

}

