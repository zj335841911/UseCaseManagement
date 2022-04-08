package cn.ibizlab.pms.util.client;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Set;

@Component
public class IBZOUFallback implements IBZOUFeignClient {

    @Override
    public Map<String, Set<String>> getOUMapsByUserId(String userId) {
        return null;
    }

    @Override
    public boolean sync(JSONObject jo) {
        return false;
    }
}
