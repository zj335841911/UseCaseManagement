package cn.ibizlab.pms.util.client;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(value = "${ibiz.ref.service.notify:ibznotify-api}",fallback = IBZNotifyFallback.class)
public interface IBZNotifyFeignClient
{
	@RequestMapping(method = RequestMethod.POST,value = "/notify/sendmsg")
	Boolean SendMsg(@RequestBody JSONObject msg);

	@RequestMapping(method = RequestMethod.POST,value = "/notify/createmsgtempl")
	Boolean createMsgTemplate(@RequestBody JSONObject template);


	@RequestMapping(method = RequestMethod.POST,value = "/notify/dingtalk/sendlinkmsg")
	Long sendDingTalkLinkMsg(@RequestBody JSONObject msg);

	@RequestMapping(method = RequestMethod.POST,value = "/notify/dingtalk/createworkrecord")
	String createDingTalkWorkRecord(@RequestBody JSONObject msg);

	@RequestMapping(method = RequestMethod.POST,value = "/notify/dingtalk/finishworkrecord/{msgid}")
	Boolean finishDingTalkWorkRecord(@PathVariable("msgid") String msgId);
}
