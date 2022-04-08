package cn.ibizlab.pms.core.search.extentions.query;

import cn.ibizlab.pms.core.zentao.domain.Product;
import cn.ibizlab.pms.core.zentao.domain.Project;
import cn.ibizlab.pms.core.zentao.filter.ProductSearchContext;
import cn.ibizlab.pms.core.zentao.filter.ProjectSearchContext;
import cn.ibizlab.pms.core.zentao.service.IProductService;
import cn.ibizlab.pms.core.zentao.service.IProjectService;
import org.elasticsearch.index.query.*;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class IbizporIndexCondition {
    @Autowired
    IProjectService projectService;
    @Autowired
    IProductService productService;

    public SearchSourceBuilder buildQuery(String hitKey) {

        //1.关键字搜索字段条件
        BoolQueryBuilder boolQueryBuilder1 = QueryBuilders.boolQuery();
        MatchQueryBuilder matchQueryBuilder1 = QueryBuilders.matchQuery("indexname", hitKey);
        MatchQueryBuilder matchQueryBuilder2 = QueryBuilders.matchQuery("indexdesc", hitKey);
        boolQueryBuilder1.should(matchQueryBuilder1).should(matchQueryBuilder2).minimumShouldMatch(1);

        //2.权限过滤条件：
        ProjectSearchContext projectSearchContext =   new ProjectSearchContext();
        projectSearchContext.size = Integer.MAX_VALUE;
        List<Project> projects = projectService.searchCurUser(projectSearchContext).toList();
        ProductSearchContext productSearchContext =   new ProductSearchContext();
        productSearchContext.size = Integer.MAX_VALUE;
        List<Product> products = productService.searchCurUer(new ProductSearchContext()).toList();

        List<Long> productIds = products.stream().map(product -> { return product.getId();}).collect(Collectors.toList());
        List<Long> projectIds = projects.stream().map(project -> { return project.getId();}).collect(Collectors.toList());

        TermsQueryBuilder termsQueryBuilder1 = QueryBuilders.termsQuery("product",productIds);
        TermsQueryBuilder termsQueryBuilder2 = QueryBuilders.termsQuery("project",projectIds);
        BoolQueryBuilder boolQueryBuilder2 = QueryBuilders.boolQuery();
        boolQueryBuilder2.should(termsQueryBuilder1).should(termsQueryBuilder2).minimumShouldMatch(1);

        //3.未删除
        TermQueryBuilder termsQueryBuilder = QueryBuilders.termQuery("deleted",0);

        HighlightBuilder highlightBuilder = new HighlightBuilder();
        highlightBuilder.preTags("<b><font color='red'>");
        highlightBuilder.postTags("</font></b>");
        highlightBuilder.field("indexname");
        highlightBuilder.field("indexdesc");//设置高亮字段

        //满足关键字搜索、且满足权限条件
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        boolQueryBuilder.must(boolQueryBuilder1).must(boolQueryBuilder2).must(termsQueryBuilder);

        SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
        sourceBuilder.query(boolQueryBuilder);
        sourceBuilder.highlighter(highlightBuilder);
        return sourceBuilder;
    }

}
