package cn.ibizlab.pms.util.client;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Component;

@Component
public class IBZNotifyFallback implements IBZNotifyFeignClient {

	@Override
	public Boolean SendMsg(JSONObject msg) {
		return null;
	}

	@Override
	public Boolean createMsgTemplate(JSONObject template) {
		return null;
	}

	@Override
	public Long sendDingTalkLinkMsg(JSONObject msg) {
		return null;
	}

	@Override
	public String createDingTalkWorkRecord(JSONObject msg) {
		return null;
	}

	@Override
	public Boolean finishDingTalkWorkRecord(String msgId) {
		return null;
	}

}
