package cn.ibizlab.pms.core.search.extentions.rest;

import cn.ibizlab.pms.core.es.service.IIbizproIndexESService;
import cn.ibizlab.pms.core.search.util.BulkProcessUtil;
import cn.ibizlab.pms.core.search.util.IndexUtil;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.helper.HttpUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

import static cn.ibizlab.pms.core.search.extentions.service.IbizproIndexSearchService.INDEX;

@Slf4j
@RestController
@ConditionalOnBean(IIbizproIndexESService.class)
public class ESRest {
    @Autowired
    BulkProcessUtil bulkProcessUtil;
    @Autowired
    IndexUtil indexUtil;
    @Value("${ibiz.es.server}")
    public String address;

    @RequestMapping(method = RequestMethod.GET, value = "/es/test")
    public ResponseEntity<String> testConnection(){
        String testUrl = "http://"+address;
        ResponseEntity<String> response =  HttpUtil.doRequest(testUrl,String.class);
        log.info("connectionTest:{}",response.getBody());
       return response;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/es/bulk")
    public ResponseEntity<String> bulk() {
        try {
            bulkProcessUtil.importData();
            return ResponseEntity.ok().body("ok");
        } catch (IOException e) {
            e.printStackTrace();
            log.error("ES批量更新失败,{}",e);
            throw new BadRequestAlertException("ES批量更新失败。",null,null);
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/es/createMapping")
    public ResponseEntity<String> createMapping(){
        try {
            indexUtil.createMapping();
            return ResponseEntity.ok().body("ok");
        } catch (IOException e) {
            e.printStackTrace();
            log.error("ES索引映射创建失败。",e);
            throw new BadRequestAlertException("ES索引映射创建失败。",null,null);
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/es/deleteindex")
    public ResponseEntity<String> deleteIndex(String index){
        try {
            indexUtil.delete(index);
            return ResponseEntity.ok().body("ok");
        } catch (IOException e) {
            e.printStackTrace();
            log.error("ES删除索引[{}]失败，原因为",INDEX,e);
            throw new BadRequestAlertException("ES删除索引["+INDEX+"]失败。",null,null);
        }
    }

}