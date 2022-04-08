package cn.ibizlab.pms.webapi.rest;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import lombok.extern.slf4j.Slf4j;
import com.alibaba.fastjson.JSONObject;
import javax.servlet.ServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.validation.annotation.Validated;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import cn.ibizlab.pms.webapi.dto.*;
import cn.ibizlab.pms.webapi.mapping.*;
import cn.ibizlab.pms.core.zentao.domain.Todo;
import cn.ibizlab.pms.core.zentao.service.ITodoService;
import cn.ibizlab.pms.core.zentao.filter.TodoSearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"待办" })
@RestController("WebApi-todo")
@RequestMapping("")
public class TodoResource {

    @Autowired
    public ITodoService todoService;

    @Autowired
    @Lazy
    public TodoMapping todoMapping;

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Create-all')")
    @ApiOperation(value = "新建待办", tags = {"待办" },  notes = "新建待办")
	@RequestMapping(method = RequestMethod.POST, value = "/todos")
    public ResponseEntity<TodoDTO> create(@Validated @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
		todoService.create(domain);
        TodoDTO dto = todoMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Create-all')")
    @ApiOperation(value = "批量新建待办", tags = {"待办" },  notes = "批量新建待办")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<TodoDTO> tododtos) {
        todoService.createBatch(todoMapping.toDomain(tododtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Update-all')")
    @ApiOperation(value = "更新待办", tags = {"待办" },  notes = "更新待办")
	@RequestMapping(method = RequestMethod.PUT, value = "/todos/{todo_id}")
    public ResponseEntity<TodoDTO> update(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
		Todo domain  = todoMapping.toDomain(tododto);
        domain .setId(todo_id);
		todoService.update(domain );
		TodoDTO dto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Update-all')")
    @ApiOperation(value = "批量更新待办", tags = {"待办" },  notes = "批量更新待办")
	@RequestMapping(method = RequestMethod.PUT, value = "/todos/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<TodoDTO> tododtos) {
        todoService.updateBatch(todoMapping.toDomain(tododtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Remove-all')")
    @ApiOperation(value = "删除待办", tags = {"待办" },  notes = "删除待办")
	@RequestMapping(method = RequestMethod.DELETE, value = "/todos/{todo_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("todo_id") Long todo_id) {
         return ResponseEntity.status(HttpStatus.OK).body(todoService.remove(todo_id));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Remove-all')")
    @ApiOperation(value = "批量删除待办", tags = {"待办" },  notes = "批量删除待办")
	@RequestMapping(method = RequestMethod.DELETE, value = "/todos/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        todoService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Get-all')")
    @ApiOperation(value = "获取待办", tags = {"待办" },  notes = "获取待办")
	@RequestMapping(method = RequestMethod.GET, value = "/todos/{todo_id}")
    public ResponseEntity<TodoDTO> get(@PathVariable("todo_id") Long todo_id) {
        Todo domain = todoService.get(todo_id);
        TodoDTO dto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取待办草稿", tags = {"待办" },  notes = "获取待办草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/todos/getdraft")
    public ResponseEntity<TodoDTO> getDraft(TodoDTO dto) {
        Todo domain = todoMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(todoMapping.toDto(todoService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Activate-all')")
    @ApiOperation(value = "Activate", tags = {"待办" },  notes = "Activate")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/activate")
    public ResponseEntity<TodoDTO> activate(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.activate(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Activate-all')")
    @ApiOperation(value = "批量处理[Activate]", tags = {"待办" },  notes = "批量处理[Activate]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/activatebatch")
    public ResponseEntity<Boolean> activateBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-AssignTo-all')")
    @ApiOperation(value = "AssignTo", tags = {"待办" },  notes = "AssignTo")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/assignto")
    public ResponseEntity<TodoDTO> assignTo(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.assignTo(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-AssignTo-all')")
    @ApiOperation(value = "批量处理[AssignTo]", tags = {"待办" },  notes = "批量处理[AssignTo]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/assigntobatch")
    public ResponseEntity<Boolean> assignToBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @ApiOperation(value = "检查待办", tags = {"待办" },  notes = "检查待办")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody TodoDTO tododto) {
        return  ResponseEntity.status(HttpStatus.OK).body(todoService.checkKey(todoMapping.toDomain(tododto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Close-all')")
    @ApiOperation(value = "Close", tags = {"待办" },  notes = "Close")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/close")
    public ResponseEntity<TodoDTO> close(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.close(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Close-all')")
    @ApiOperation(value = "批量处理[Close]", tags = {"待办" },  notes = "批量处理[Close]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/closebatch")
    public ResponseEntity<Boolean> closeBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-CreateCycle-all')")
    @ApiOperation(value = "定时创建周期", tags = {"待办" },  notes = "定时创建周期")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/createcycle")
    public ResponseEntity<TodoDTO> createCycle(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.createCycle(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-CreateCycle-all')")
    @ApiOperation(value = "批量处理[定时创建周期]", tags = {"待办" },  notes = "批量处理[定时创建周期]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/createcyclebatch")
    public ResponseEntity<Boolean> createCycleBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.createCycleBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Finish-all')")
    @ApiOperation(value = "Finish", tags = {"待办" },  notes = "Finish")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/finish")
    public ResponseEntity<TodoDTO> finish(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.finish(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Finish-all')")
    @ApiOperation(value = "批量处理[Finish]", tags = {"待办" },  notes = "批量处理[Finish]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/finishbatch")
    public ResponseEntity<Boolean> finishBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.finishBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Save-all')")
    @ApiOperation(value = "保存待办", tags = {"待办" },  notes = "保存待办")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/save")
    public ResponseEntity<TodoDTO> save(@RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        todoService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(todoMapping.toDto(domain));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-Save-all')")
    @ApiOperation(value = "批量保存待办", tags = {"待办" },  notes = "批量保存待办")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<TodoDTO> tododtos) {
        todoService.saveBatch(todoMapping.toDomain(tododtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-SendMessage-all')")
    @ApiOperation(value = "行为", tags = {"待办" },  notes = "行为")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/sendmessage")
    public ResponseEntity<TodoDTO> sendMessage(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.sendMessage(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-SendMessage-all')")
    @ApiOperation(value = "批量处理[行为]", tags = {"待办" },  notes = "批量处理[行为]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-SendMsgPreProcess-all')")
    @ApiOperation(value = "发送消息前置处理", tags = {"待办" },  notes = "发送消息前置处理")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/{todo_id}/sendmsgpreprocess")
    public ResponseEntity<TodoDTO> sendMsgPreProcess(@PathVariable("todo_id") Long todo_id, @RequestBody TodoDTO tododto) {
        Todo domain = todoMapping.toDomain(tododto);
        domain.setId(todo_id);
        domain = todoService.sendMsgPreProcess(domain);
        tododto = todoMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(tododto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-SendMsgPreProcess-all')")
    @ApiOperation(value = "批量处理[发送消息前置处理]", tags = {"待办" },  notes = "批量处理[发送消息前置处理]")
	@RequestMapping(method = RequestMethod.POST, value = "/todos/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessBatch(@RequestBody List<TodoDTO> tododtos) {
        List<Todo> domains = todoMapping.toDomain(tododtos);
        boolean result = todoService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchDefault-all')")
	@ApiOperation(value = "获取DEFAULT", tags = {"待办" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/todos/fetchdefault")
	public ResponseEntity<List<TodoDTO>> fetchDefault(@RequestBody TodoSearchContext context) {
        Page<Todo> domains = todoService.searchDefault(context) ;
        List<TodoDTO> list = todoMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchDefault-all')")
	@ApiOperation(value = "查询DEFAULT", tags = {"待办" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/todos/searchdefault")
	public ResponseEntity<Page<TodoDTO>> searchDefault(@RequestBody TodoSearchContext context) {
        Page<Todo> domains = todoService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(todoMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchMyTodo-all')")
	@ApiOperation(value = "获取我的待办", tags = {"待办" } ,notes = "获取我的待办")
    @RequestMapping(method= RequestMethod.GET , value="/todos/fetchmytodo")
	public ResponseEntity<List<TodoDTO>> fetchMyTodo(TodoSearchContext context) {
        Page<Todo> domains = todoService.searchMyTodo(context) ;
        List<TodoDTO> list = todoMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchMyTodo-all')")
	@ApiOperation(value = "查询我的待办", tags = {"待办" } ,notes = "查询我的待办")
    @RequestMapping(method= RequestMethod.POST , value="/todos/searchmytodo")
	public ResponseEntity<Page<TodoDTO>> searchMyTodo(@RequestBody TodoSearchContext context) {
        Page<Todo> domains = todoService.searchMyTodo(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(todoMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchMyTodoPc-all')")
	@ApiOperation(value = "获取我的待办", tags = {"待办" } ,notes = "获取我的待办")
    @RequestMapping(method= RequestMethod.GET , value="/todos/fetchmytodopc")
	public ResponseEntity<List<TodoDTO>> fetchMyTodoPc(TodoSearchContext context) {
        Page<Todo> domains = todoService.searchMyTodoPc(context) ;
        List<TodoDTO> list = todoMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchMyTodoPc-all')")
	@ApiOperation(value = "查询我的待办", tags = {"待办" } ,notes = "查询我的待办")
    @RequestMapping(method= RequestMethod.POST , value="/todos/searchmytodopc")
	public ResponseEntity<Page<TodoDTO>> searchMyTodoPc(@RequestBody TodoSearchContext context) {
        Page<Todo> domains = todoService.searchMyTodoPc(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(todoMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchMyUpcoming-all')")
	@ApiOperation(value = "获取MyUpcoming", tags = {"待办" } ,notes = "获取MyUpcoming")
    @RequestMapping(method= RequestMethod.GET , value="/todos/fetchmyupcoming")
	public ResponseEntity<List<TodoDTO>> fetchMyUpcoming(TodoSearchContext context) {
        Page<Todo> domains = todoService.searchMyUpcoming(context) ;
        List<TodoDTO> list = todoMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Todo-searchMyUpcoming-all')")
	@ApiOperation(value = "查询MyUpcoming", tags = {"待办" } ,notes = "查询MyUpcoming")
    @RequestMapping(method= RequestMethod.POST , value="/todos/searchmyupcoming")
	public ResponseEntity<Page<TodoDTO>> searchMyUpcoming(@RequestBody TodoSearchContext context) {
        Page<Todo> domains = todoService.searchMyUpcoming(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(todoMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



}

