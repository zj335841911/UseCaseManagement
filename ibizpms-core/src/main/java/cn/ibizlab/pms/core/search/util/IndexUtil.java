package cn.ibizlab.pms.core.search.util;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.elasticsearch.action.admin.indices.create.CreateIndexRequest;
import org.elasticsearch.action.admin.indices.delete.DeleteIndexRequest;
import org.elasticsearch.action.support.ActiveShardCount;
import org.elasticsearch.action.support.IndicesOptions;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

import static cn.ibizlab.pms.core.search.extentions.service.IbizproIndexSearchService.INDEX;
import static cn.ibizlab.pms.core.search.extentions.service.IbizproIndexSearchService.TYPE;

@Slf4j
@Component
public class IndexUtil {
    @Autowired
    RestHighLevelClient restHighLevelClient;

    public void delete(String index) throws IOException {
        DeleteIndexRequest request = new DeleteIndexRequest(StringUtils.isEmpty(index)? INDEX:index);

        request.timeout(TimeValue.timeValueMinutes(2));
        request.masterNodeTimeout(TimeValue.timeValueMinutes(1));
        request.indicesOptions(IndicesOptions.lenientExpandOpen());

        restHighLevelClient.indices().delete(request, RequestOptions.DEFAULT);
    }

    public void createMapping() throws IOException {

        CreateIndexRequest request = new CreateIndexRequest(INDEX);
        XContentBuilder mapping = XContentFactory.jsonBuilder().startObject()
                .startObject("_doc")
                .startObject("properties")
                //数据主键
                .startObject("indexid").field("type", "long").field("index", false).endObject()
                //文档主键
                .startObject("docid").field("type", "keyword").field("index", false).endObject()
                //全文检索字段
                .startObject("indexname").field("type", "text").field("analyzer", "ik_max_word").field("search_analyzer", "ik_smart").endObject()
                .startObject("indexdesc").field("type", "text").field("analyzer", "ik_max_word").field("search_analyzer", "ik_smart").endObject()
                //精确匹配
                .startObject("product").field("type", "long").field("index", true).endObject()
                .startObject("project").field("type", "long").field("index", true).endObject()
                .startObject("deleted").field("type", "keyword").field("index", true).endObject()
                //不匹配字段
                .startObject("mdeptid").field("type", "keyword").field("index", false).endObject()
                .startObject("orgid").field("type", "keyword").field("index", false).endObject()
                .startObject("acl").field("type", "keyword").field("index", false).endObject()
                .startObject("acllist").field("type", "keyword").field("index", false).endObject()
                .endObject()
                .endObject()
                .endObject();
        // add partition
        request.mapping(TYPE, mapping);

        // 配置可选参数
        request.timeout(TimeValue.timeValueMinutes(2));
        request.masterNodeTimeout(TimeValue.timeValueMinutes(1));
        request.waitForActiveShards(ActiveShardCount.DEFAULT);

        restHighLevelClient.indices().create(request, RequestOptions.DEFAULT);
        log.info("成功创建索引映射");
    }
}
