package cn.ibizlab.pms.webapi.rest.extension;

import cn.ibizlab.pms.core.zentao.domain.Dept;
import cn.ibizlab.pms.core.zentao.domain.User;
import cn.ibizlab.pms.core.zentao.service.IDeptService;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

public class UAAsyncResource {
    @Autowired
    IDeptService deptService;
    @Autowired
    IUserService userService;
    @RequestMapping(method = RequestMethod.GET, value = "/depts/all")
    ResponseEntity<List<Dept>> fetchDefaultDepts(){
        List<Dept> list = deptService.list();
        return ResponseEntity.status(HttpStatus.OK)
                .body(list);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/users/all")
    ResponseEntity<List<User>> fetchDefaultUers(){
        List<User> list = userService.list();
        return ResponseEntity.status(HttpStatus.OK)
                .body(list);
    }

}
