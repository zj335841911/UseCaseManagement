package cn.ibizlab.pms.util.service;

import com.alibaba.fastjson.JSONObject;
import cn.ibizlab.pms.util.client.IBZOUFeignClient;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.client.IBZUAAFeignClient;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import cn.ibizlab.pms.util.security.AuthorizationLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.util.StringUtils;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;

/**
 * 实体[IBZUSER] 服务对象接口实现
 */
@Primary
@Service("IBZUAAUserService")
@ConditionalOnExpression("${ibiz.enablePermissionValid:false}&&'${ibiz.auth.service:SimpleUserService}'.equals('IBZUAAUserService')")
public class IBZUAAUserService implements AuthenticationUserService{

	@Autowired
	private IBZUAAFeignClient uaaFeignClient;

	@Override
	public AuthenticationUser loadUserByUsername(String username) {

		AuthenticationUser user=uaaFeignClient.loginByUsername(username);
		if(user==null)
			throw new BadRequestAlertException("登录失败","IBZUAAUser",username);
		return user;
	}

	@Override
	public AuthenticationUser loadUserByLogin(String username, String password) {
		String[] data=username.split("[|]");
		String loginname=username;
		String domains="";

		if(data.length==2) {
			loginname=data[0].trim();
			domains=data[1].trim();
		}
		AuthorizationLogin logininfo = new AuthorizationLogin();
		logininfo.setDomain(domains);
		logininfo.setLoginname(loginname);
		logininfo.setPassword(password);
		AuthenticationUser user=uaaFeignClient.login(logininfo);
		if(user==null)
			throw new BadRequestAlertException("登录失败","IBZUAAUser",username);
		return user;
	}


	@Override
	public void resetByUsername(String username) {

	}

}
