package com.example.demo.Service;

import com.example.demo.Covid;
import com.example.demo.ProvinceAPI.All;
import com.example.demo.Utils.JsonUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class RestService {

    private static Logger logger = LogManager.getLogger(RestService.class);

    private final RestTemplate restTemplate;

    public RestService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public Covid getDataCovidAPI() {
        String url = "https://covid19.th-stat.com/api/open/today";
        return this.restTemplate.getForObject(url, Covid.class);
    }

    public All getProvincesObject() throws IOException, InterruptedException {
        String url = "https://opendata.data.go.th/api/3/action/datastore_search?resource_id=df922923-e009-4dee-92fc-d963a86ce4b8";

        HttpClient client = HttpClient.newHttpClient();
        client.followRedirects();

        java.net.http.HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("api-key", "tn9wW4JVutkj4NekOQHB3dQIkVnyVYM9")
                .header("Accept", "application/json")
                .header("Content-Type", "application/json;charset=utf-8")
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        logger.info("HTTP Status Code: {}", response.statusCode());
        logger.info("Response body: {}", response.body());

        return JsonUtils.convertJsonToAll(response.body());
    }

}