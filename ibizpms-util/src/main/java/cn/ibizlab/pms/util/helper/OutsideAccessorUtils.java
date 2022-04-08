package cn.ibizlab.pms.util.helper;

import cn.ibizlab.pms.util.web.PSSysModelRequestInterceptor;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import feign.*;
import feign.codec.Decoder;
import feign.codec.Encoder;
import feign.codec.ErrorDecoder;
import jdk.nashorn.internal.runtime.regexp.joni.exception.InternalException;
import org.apache.commons.lang3.StringUtils;
import org.springframework.cloud.openfeign.ribbon.LoadBalancerFeignClient;
import org.springframework.context.ApplicationContext;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

public class OutsideAccessorUtils {

    private static final Cache<Map<String, Class<?>>, Object> cache = CacheBuilder.newBuilder().weakValues().build();


    /**
     * 常规服务，一般登陆入口服务
     */
    public static <T> T buildAccessor(ApplicationContext applicationContext, Class<T> accessInterface, boolean https, String serverName) {
        Map pair = new HashMap();
        pair.put(serverName, accessInterface);
        try {
            return (T) cache.get(pair, () -> construct(applicationContext, accessInterface, serverName, https));
        } catch (ExecutionException e) {
            throw new RuntimeException("");
        }
    }

    /**
     * 系统、需要验证服务
     */
    public static <T> T buildAccessor(ApplicationContext applicationContext, Class<T> accessInterface, String serverName, boolean https, String loginServerName, boolean loginHttps, String userName, String password, String devSlnSysId) {
        Map pair = new HashMap();
        pair.put(devSlnSysId, accessInterface);
        try {
            return (T) cache.get(pair, () -> construct(applicationContext, accessInterface, serverName, https, loginServerName, loginHttps, userName, password, devSlnSysId));
        } catch (ExecutionException e) {
            throw new RuntimeException("");
        }
    }

    @SuppressWarnings("unchecked")
    private static <T> T construct(ApplicationContext applicationContext, Class<T> accessInterface, String serverName, boolean https) throws Exception {
        return construct(applicationContext, accessInterface, serverName, https, null, false, null, null,null);
    }

    @SuppressWarnings("unchecked")
    private static <T> T construct(ApplicationContext applicationContext, Class<T> accessInterface, String serverName, boolean https, String loginServerName, boolean loginHttps, String userName, String password, String devSlnSysId) throws Exception {
        Contract contract = (Contract) applicationContext.getBean(Contract.class);
        Encoder encoder = (Encoder) applicationContext.getBean(Encoder.class);
        Decoder decoder = (Decoder) applicationContext.getBean(Decoder.class);
        Client client = (Client) applicationContext.getBean(Client.class);
        Feign.Builder builder = Feign.builder().client(client).errorDecoder(new ErrorDecoder() {
            @Override
            public Exception decode(String methodKey, Response response) {
                try {
                    if (response.body() != null) {
                        String targetMsg = null;
                        String body = Util.toString(response.body().asReader());
                        return new InternalException(body);


                    }
                } catch (Exception var4) {
                    return new InternalException(var4.getMessage());
                }
                return new InternalException("系统异常,请联系管理员");
            }
        }).contract(contract).encoder(encoder).decoder(decoder);
        if (StringUtils.isNotBlank(loginServerName)) {
            PSSysModelRequestInterceptor interceptor = new PSSysModelRequestInterceptor(applicationContext, loginServerName, loginHttps, userName, password,devSlnSysId);
            builder.requestInterceptor(interceptor);
        }
        return builder.target(accessInterface, https ? "https" : "http" + "://" + serverName);

    }



    // 根据Url构建
    /**
     * 常规服务，一般登陆入口服务
     */
    public static <T> T buildAccessorByUrl(ApplicationContext applicationContext, Class<T> accessInterface, boolean https, String url) {
        Map pair = new HashMap();
        pair.put(url, accessInterface);
        try {
            return (T) cache.get(pair, () -> constructByUrl(applicationContext, accessInterface, url, https));
        } catch (ExecutionException e) {
            throw new RuntimeException("");
        }
    }

    /**
     * 系统、需要验证服务
     */
    public static <T> T buildAccessorByUrl(ApplicationContext applicationContext, Class<T> accessInterface, String url, boolean https, String loginUrl, boolean loginHttps, String userName, String password, String devSlnSysId) {
        Map pair = new HashMap();
        pair.put(devSlnSysId, accessInterface);
        try {
            return (T) cache.get(pair, () -> constructByUrl(applicationContext, accessInterface, url, https, loginUrl, loginHttps, userName, password, devSlnSysId));
        } catch (ExecutionException e) {
            throw new RuntimeException("");
        }
    }

    @SuppressWarnings("unchecked")
    private static <T> T constructByUrl(ApplicationContext applicationContext, Class<T> accessInterface, String url, boolean https) throws Exception {
        return constructByUrl(applicationContext, accessInterface, url, https, null, false, null, null,null);
    }

    @SuppressWarnings("unchecked")
    private static <T> T constructByUrl(ApplicationContext applicationContext, Class<T> accessInterface, String url, boolean https, String loginUrl, boolean loginHttps, String userName, String password, String devSlnSysId) throws Exception {
        Contract contract = (Contract) applicationContext.getBean(Contract.class);
        Encoder encoder = (Encoder) applicationContext.getBean(Encoder.class);
        Decoder decoder = (Decoder) applicationContext.getBean(Decoder.class);
        Client client = (Client) applicationContext.getBean(Client.class);
        if (client instanceof LoadBalancerFeignClient) { // 无需均衡负载
            client = ((LoadBalancerFeignClient)client).getDelegate();
        }
        Feign.Builder builder = Feign.builder().client(client).errorDecoder(new ErrorDecoder() {
            @Override
            public Exception decode(String methodKey, Response response) {
                try {
                    if (response.body() != null) {
                        String targetMsg = null;
                        String body = Util.toString(response.body().asReader());
                        return new InternalException(body);


                    }
                } catch (Exception var4) {
                    return new InternalException(var4.getMessage());
                }
                return new InternalException("系统异常,请联系管理员");
            }
        }).contract(contract).encoder(encoder).decoder(decoder);
        if (StringUtils.isNotBlank(loginUrl)) {
            PSSysModelRequestInterceptor interceptor = new PSSysModelRequestInterceptor(applicationContext, loginUrl, userName, password,devSlnSysId);
            builder.requestInterceptor(interceptor);
        }
        return builder.target(accessInterface, url);

    }

}