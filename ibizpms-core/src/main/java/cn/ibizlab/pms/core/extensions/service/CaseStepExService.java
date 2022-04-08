package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.domain.CaseStep;
import cn.ibizlab.pms.core.zentao.filter.CaseStepSearchContext;
import cn.ibizlab.pms.core.zentao.service.impl.CaseStepServiceImpl;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 实体[用例步骤] 自定义服务对象
 */
@Slf4j
@Primary
@Service("CaseStepExService")
public class CaseStepExService extends CaseStepServiceImpl {

    /**
     * 查询集合 当前测试步骤
     */
    @Override
    public Page<CaseStep> searchCurTest(CaseStepSearchContext context) {
        com.baomidou.mybatisplus.extension.plugins.pagination.Page<CaseStep> pages=baseMapper.searchCurTest(context.getPages(),context,context.getSelectCond());
        List<CaseStep> list = pages.getRecords();
        JSONArray jsonArray = new JSONArray();
        if(!list.isEmpty() && list.size() > 0) {
            try {
                jsonArray = formatCaseSteps(list.get(0).getSteps());
            }catch (Exception e) {
                log.warn(e.getMessage(), e);
            }
        }
        List<CaseStep> list1 = new ArrayList<>();
        if(jsonArray != null && !jsonArray.isEmpty() && jsonArray.size() > 0) {
            for(CaseStep caseStep : list) {
                caseStep.setSteps("");
                for (int i = 0; i < jsonArray.size(); i++) {
                    JSONObject jo = (JSONObject) jsonArray.get(i);
                    if (String.valueOf(jo.get("id")).equals(String.valueOf(caseStep.getId()))) {
                      caseStep.setSteps(jo.getString("result"));
                      caseStep.setReals(jo.getString("comment"));
                      break;
                    }
                }
                list1.add(caseStep);
            }
        }
        pages.getRecords().clear();
        pages.setRecords(list1);
        return new PageImpl<CaseStep>(pages.getRecords(), context.getPageable(), pages.getTotal());
    }

    /**
     * 解析禅道用例执行步骤结果的str为json。<br>
     * 原始数据（例子）为<br>
     * a:8:{i:160;a:2:{s:6:"result";s:3:"n/a";s:4:"real";s:4:"real";}i:162;a:2:{s:6:"result";s:4:"fail";s:4:"real";s:6:"result";}i:163;a:2:{s:6:"result";s:7:"blocked";s:4:"real";s:7:"blocked";}i:164;a:2:{s:6:"result";s:4:"fail";s:4:"real";s:19:"测试0093535*33#ss";}i:166;a:2:{s:6:"result";s:4:"fail";s:4:"real";s:14:"11111111111111";}i:167;a:2:{s:6:"result";s:4:"pass";s:4:"real";s:12:"111111111111";}i:168;a:2:{s:6:"result";s:4:"fail";s:4:"real";s:6:"111111";}i:169;a:2:{s:6:"result";s:4:"fail";s:4:"real";s:27:"111111111111111111111111111";}}<br>
     * 解析后为<br>
     * [<br>
     *  {<br>
     *     "id": 160,<br>
     *     "result": "n/a",<br>
     *     "comment": "real"<br>
     *  }<br>
     * ]<br>
     *
     * @param caseStepsStr 待解析的字符串
     * @return 解析后的json
     * @throws Exception 传入格式异常
     */
    public static JSONArray formatCaseSteps(String caseStepsStr) throws Exception {
        if (caseStepsStr == null || caseStepsStr.isEmpty()) {
            return null;
        }
        JSONArray ja = new JSONArray();
        caseStepsStr = caseStepsStr.substring(2, caseStepsStr.length());
        caseStepsStr = caseStepsStr.substring(caseStepsStr.indexOf(":") + 2, caseStepsStr.length() - 1);
        caseStepsStr = caseStepsStr.replaceAll("s:6:\\\"result\\\";(s)", "$1");
        caseStepsStr = caseStepsStr.replaceAll("s:4:\\\"real\\\";(s)", "$1");
        caseStepsStr = caseStepsStr.replaceAll("(\\\";\\})(i:)", "$1\r\n$2");
        String[] caseStepsArray = caseStepsStr.split("\r\n");
        for (String caseStep : caseStepsArray) {
            JSONObject jo = new JSONObject();
            caseStep = caseStep.substring(2, caseStep.length());
            Integer caseStepId = Integer.parseInt(caseStep.substring(0, caseStep.indexOf(";")));
            jo.put("id", caseStepId);
            caseStep = caseStep.substring(9, caseStep.length() - 1);
            String[] rstArray = caseStep.split("\\\"");
            jo.put("result", rstArray[1]);
            jo.put("comment", rstArray[3]);
            ja.add(jo);
        }
        return ja;
    }
}
