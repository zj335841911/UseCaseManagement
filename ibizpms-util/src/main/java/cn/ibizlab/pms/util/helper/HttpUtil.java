package cn.ibizlab.pms.util.helper;

import cn.ibizlab.pms.util.constants.IBizPMSConstants;
import com.alibaba.fastjson.JSONObject;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

final public class HttpUtil {

    public static <T> ResponseEntity<T> doRequest(String url, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        HttpHeaders headers = new HttpHeaders();
        return doRequest(restTemplate, url, HttpMethod.GET, headers, null, responseClazz);
    }

    public static <T> ResponseEntity<T> doRequest(String url, HttpHeaders headers, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        return doRequest(restTemplate, url, HttpMethod.GET, headers, null, responseClazz);
    }

    public static <T> ResponseEntity<T> doRequest(String url, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        HttpHeaders headers = new HttpHeaders();
        return doRequest(restTemplate, url, HttpMethod.POST, headers, paramMap, responseClazz);
    }

    public static <T> ResponseEntity<T> doRequest(String url, HttpHeaders headers, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        return doRequest(restTemplate, url, HttpMethod.POST, headers, paramMap, responseClazz);
    }

    public static <T> ResponseEntity<T> doRequest(String url, HttpMethod method, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        HttpHeaders headers = new HttpHeaders();
        return doRequest(restTemplate, url, method, headers, paramMap, responseClazz);
    }

    public static <T> ResponseEntity<T> doRequest(String url, HttpMethod method, HttpHeaders headers, JSONObject paramMap, Class<T> responseClazz){
        RestTemplate restTemplate = getRestTemplate();
        return doRequest(restTemplate, url, method, headers, paramMap, responseClazz);
    }

    public static HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

    public static HttpHeaders getHttpHeaders(MediaType mediaType) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(mediaType);
        return headers;
    }

    public static <T> ResponseEntity<T> doRequest(RestTemplate restTemplate, String url, HttpMethod method, HttpHeaders headers, JSONObject paramMap, Class<T> responseClazz){
        if (restTemplate == null) {
            restTemplate = getRestTemplate();
        }
        if (method == null) {
            method = HttpMethod.GET;
        }
        if (headers == null) {
            headers = new HttpHeaders();
        }
        MultiValueMap<String, Object> params = covertJSONToMultiValueMap(paramMap);
        HttpEntity<MultiValueMap<String, Object>> entity;
        if(params != null){
            entity = new HttpEntity<>(params, headers);
        }else{
            entity = new HttpEntity<>(null, headers);
        }
        return restTemplate.exchange(url, method, entity, responseClazz);
    }

    public static MultiValueMap<String,Object> covertJSONToMultiValueMap(JSONObject jo) {
        if (jo == null || jo.isEmpty()) {
            return null;
        }
        MultiValueMap<String,Object> params = new LinkedMultiValueMap<>();
        for (String key : jo.keySet()) {
            Object joObj = jo.get(key);
            if (key.endsWith("[]") && joObj != null) {
                if (joObj instanceof Iterable || joObj instanceof Arrays) {
                    List array = (List) jo.get(key);
                    for (int i = 0; i < array.size(); i++) {
                        params.add(key.substring(0, key.length() - 2) + "[" + i + "]", array.get(i));
                    }
                    continue;
                }
            }
            params.add(key, joObj);
        }
        return params;
    }

    public static RestTemplate getRestTemplate(){
    return getRestTemplate(IBizPMSConstants.ENCODING);
    }

    public static RestTemplate getRestTemplate(String charset){
        RestTemplate restTemplate = new RestTemplate();
        for (HttpMessageConverter<?> httpMessageConverter : restTemplate.getMessageConverters()) {
            if (httpMessageConverter instanceof StringHttpMessageConverter) {
                ((StringHttpMessageConverter) httpMessageConverter).setDefaultCharset(Charset.forName(charset));
                break;
            }
        }
        return restTemplate;
    }

}
