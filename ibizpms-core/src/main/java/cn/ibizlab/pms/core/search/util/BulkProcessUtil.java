package cn.ibizlab.pms.core.search.util;

import cn.ibizlab.pms.core.es.domain.IbizproIndex;
import cn.ibizlab.pms.core.es.service.IIbizproIndexESService;
import cn.ibizlab.pms.core.search.mapping.IbizproIndexMapping;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.filter.*;
import cn.ibizlab.pms.core.zentao.service.*;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.elasticsearch.action.bulk.BulkRequest;
import org.elasticsearch.action.bulk.BulkResponse;
import org.elasticsearch.action.support.WriteRequest;
import org.elasticsearch.action.update.UpdateRequest;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static cn.ibizlab.pms.core.search.extentions.service.IbizproIndexSearchService.INDEX;

@Slf4j
@Component
@ConditionalOnBean(IIbizproIndexESService.class)
public class BulkProcessUtil {
    @Value("${ibiz.es.bulk.maxread:10000}")
    public int maxReadSize;
    @Autowired
    RestHighLevelClient restHighLevelClient;
    @Autowired
    IBugService bugService;
    @Autowired
    ICaseService caseService;
    @Autowired
    IProductService productService;
    @Autowired
    IProjectService projectService;
    @Autowired
    IStoryService storyService;
    @Autowired
    ITaskService taskService;

    public void importData() throws IOException {
        Long start = System.currentTimeMillis();

        //bug, case, product, project, story, task 的数据库数据转为ibizproindex集合。
        List<IbizproIndex> docs = importFromDB();

        // 写入
        bulk(docs);

        Long end = System.currentTimeMillis();
        log.info("批量同步了{}条数据,耗时：{}", docs.size(), end - start);
    }


    private List<IbizproIndex> importFromDB() {
        List<IbizproIndex> ibizproIndices = new ArrayList<>();

        importBug(ibizproIndices);
        importCase(ibizproIndices);
        importProduct(ibizproIndices);
        importProject(ibizproIndices);
        importStory(ibizproIndices);
        importTask(ibizproIndices);

        return ibizproIndices;
    }


    private void bulk(List<IbizproIndex> documents) throws IOException {
        BulkResponse response = null;
        if (StringUtils.isBlank(INDEX) || CollectionUtils.isEmpty(documents)) {
            log.warn("Es index is blank or documents is empty.");
            return;
        }

            BulkRequest bulkRequest = new BulkRequest();
            for (IbizproIndex ibizproIndex : documents) {
                bulkRequest.add(new UpdateRequest(INDEX, "_doc", ibizproIndex.getDocid()).doc(JSON.toJSONString(ibizproIndex),XContentType.JSON).docAsUpsert(true));
            }
            response = restHighLevelClient.bulk(bulkRequest, RequestOptions.DEFAULT);
            log.debug("bulk updated:{}",response);
        return;
    }

    private void importBug(List<IbizproIndex> indexList) {
        int page = 0;
        List<Bug> bugs = null;
        do {
            BugSearchContext context = new BugSearchContext();
            context.setPage(page);
            context.setSize(maxReadSize);
            bugs = bugService.searchESBulk(context).toList();
            List<IbizproIndex> indexes = bugs.stream().map(et -> IbizproIndexMapping.bug2IbizproIndex(et)).collect(Collectors.toList());
            indexList.addAll(indexes);
            page++;
        } while (bugs != null && bugs.size() != 0);

    }

    private void importCase(List<IbizproIndex> indexList) {
        int page = 0;
        List<Case> cases = null;
        do {
            CaseSearchContext context = new CaseSearchContext();
            context.setPage(page);
            context.setSize(maxReadSize);
            cases = caseService.searchESBulk(context).toList();
            List<IbizproIndex> indexes = cases.stream().map(et -> IbizproIndexMapping.case2IbizproIndex(et)).collect(Collectors.toList());
            indexList.addAll(indexes);
            page++;
        } while (cases != null && cases.size() != 0);

    }

    private void importProduct(List<IbizproIndex> indexList) {
        int page = 0;
        List<Product> list = null;
        do {
            ProductSearchContext context = new ProductSearchContext();
            context.setPage(page);
            context.setSize(maxReadSize);
            list = productService.searchESBulk(context).toList();
            List<IbizproIndex> indexes = list.stream().map(et -> IbizproIndexMapping.product2IbizproIndex(et)).collect(Collectors.toList());
            indexList.addAll(indexes);
            page++;
        } while (list != null && list.size() != 0);

    }

    private void importProject(List<IbizproIndex> indexList) {
        int page = 0;
        List<Project> list = null;
        do {
            ProjectSearchContext context = new ProjectSearchContext();
            context.setPage(page);
            context.setSize(maxReadSize);
            list = projectService.searchESBulk(context).toList();
            List<IbizproIndex> indexes = list.stream().map(et -> IbizproIndexMapping.project2IbizproIndex(et)).collect(Collectors.toList());
            indexList.addAll(indexes);
            page++;
        } while (list != null && list.size() != 0);

    }

    private void importStory(List<IbizproIndex> indexList) {
        int page = 0;
        List<Story> list = null;
        do {
            StorySearchContext context = new StorySearchContext();
            context.setPage(page);
            context.setSize(maxReadSize);
            list = storyService.searchESBulk(context).toList();
            List<IbizproIndex> indexes = list.stream().map(et -> IbizproIndexMapping.story2IbizproIndex(et)).collect(Collectors.toList());
            indexList.addAll(indexes);
            page++;
        } while (list != null && list.size() != 0);

    }

    private void importTask(List<IbizproIndex> indexList) {
        int page = 0;
        List<Task> list = null;
        do {
            TaskSearchContext context = new TaskSearchContext();
            context.setPage(page);
            context.setSize(maxReadSize);
            list = taskService.searchESBulk(context).toList();
            List<IbizproIndex> indexes = list.stream().map(et -> IbizproIndexMapping.task2IbizproIndex(et)).collect(Collectors.toList());
            indexList.addAll(indexes);
            page++;
        } while (list != null && list.size() != 0);

    }
}
