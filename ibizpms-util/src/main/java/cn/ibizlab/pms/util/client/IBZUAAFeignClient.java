package cn.ibizlab.pms.util.client;

import cn.ibizlab.pms.util.security.AuthenticationInfo;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.alibaba.fastjson.JSONObject;

import javax.validation.constraints.NotBlank;

@FeignClient(value = "${ibiz.ref.service.uaa:ibzuaa-api}",fallback = IBZUAAFallback.class)
public interface IBZUAAFeignClient {
	/**
	 * 同步系统资源到uaa
	 *
	 * @param system 系统资源信息
	 * @return
	 */
	@PostMapping("/syspssystems/save")
	Boolean syncSysAuthority(@RequestBody JSONObject system);

	/**
	 * 用户登录
	 *
	 * @param authorizationLogin 登录信息
	 * @return
	 */
	@PostMapping(value = "/uaa/login")
	AuthenticationUser login(@RequestBody AuthorizationLogin authorizationLogin);

	@PostMapping(value = "/v7/login")
	AuthenticationInfo v7Login(@RequestBody AuthorizationLogin authorizationLogin);

	@PostMapping(value = "/uaa/loginbyusername")
	AuthenticationUser loginByUsername(@RequestBody String username);

	@Cacheable(value = "ibzuaa_publickey")
	@GetMapping(value = "/uaa/publickey")
	String getPublicKey();

	@GetMapping(value = {"/uaa/open/dingtalk/access_token"})
	JSONObject getDingtalkAppId(@RequestParam(value = "id", required = false) String id);

	@GetMapping(value = {"/uaa/open/dingtalk/auth/{code}"})
	AuthenticationInfo getUserByToken(@PathVariable(value = "code") String code, @RequestParam(value = "id",required = false) String id);

	@RequestMapping(method = RequestMethod.GET, value = "/uaa/dingtalk/jsapi/sign")
	public JSONObject getDingTalkJSSign(@RequestParam ("openaccessid") String openAccessId, @RequestParam ("url")String url);

	@PostMapping(value = "/v7/changepwd")
	Boolean changepwd(@RequestBody JSONObject jsonObject);

}

