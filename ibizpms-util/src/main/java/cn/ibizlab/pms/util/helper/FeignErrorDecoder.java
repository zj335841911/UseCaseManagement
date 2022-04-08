package cn.ibizlab.pms.util.helper;

import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import cn.ibizlab.pms.util.errors.InternalServerErrorException;
import com.alibaba.fastjson.JSONObject;
import feign.Response;
import feign.Util;
import feign.codec.ErrorDecoder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Slf4j
@Configuration
public class FeignErrorDecoder implements ErrorDecoder {

    @Override
    public Exception decode(String methodKey, Response response) {
        try {
            // 这里直接拿到我们抛出的异常信息
            int status = response.status();
            String message = Util.toString(response.body().asReader());
            log.error("Feign调用发生了异常：[{}]",message);
            if( status == 400){
                JSONObject resp = JSONObject.parseObject(message);
                String remoteErrorMsg = resp.getString("message");
                return new BadRequestAlertException(remoteErrorMsg,null,null);
            }else {

                return new BadRequestAlertException("系统错误，请联系管理员。", null,null);
            }

        } catch (IOException ignored) {
        }
        return decode(methodKey, response);
    }
}

