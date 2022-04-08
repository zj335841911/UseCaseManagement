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
import cn.ibizlab.pms.core.zentao.domain.Story;
import cn.ibizlab.pms.core.zentao.service.IStoryService;
import cn.ibizlab.pms.core.zentao.filter.StorySearchContext;
import cn.ibizlab.pms.util.annotation.VersionCheck;

@Slf4j
@Api(tags = {"需求" })
@RestController("WebApi-story")
@RequestMapping("")
public class StoryResource {

    @Autowired
    public IStoryService storyService;

    @Autowired
    @Lazy
    public StoryMapping storyMapping;

    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydto),'pms-Story-Create')")
    @ApiOperation(value = "新建需求", tags = {"需求" },  notes = "新建需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories")
    public ResponseEntity<StoryDTO> create(@Validated @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
		storyService.create(domain);
        StoryDTO dto = storyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydtos),'pms-Story-Create')")
    @ApiOperation(value = "批量新建需求", tags = {"需求" },  notes = "批量新建需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batch")
    public ResponseEntity<Boolean> createBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.createBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "story" , versionfield = "lastediteddate")
    @PreAuthorize("hasPermission(this.storyService.get(#story_id),'pms-Story-Update')")
    @ApiOperation(value = "更新需求", tags = {"需求" },  notes = "更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/{story_id}")
    public ResponseEntity<StoryDTO> update(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
		Story domain  = storyMapping.toDomain(storydto);
        domain .setId(story_id);
		storyService.update(domain );
		StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.storyService.getStoryByEntities(this.storyMapping.toDomain(#storydtos)),'pms-Story-Update')")
    @ApiOperation(value = "批量更新需求", tags = {"需求" },  notes = "批量更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/stories/batch")
    public ResponseEntity<Boolean> updateBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.updateBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.storyService.get(#story_id),'pms-Story-Remove')")
    @ApiOperation(value = "删除需求", tags = {"需求" },  notes = "删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/{story_id}")
    public ResponseEntity<Boolean> remove(@PathVariable("story_id") Long story_id) {
         return ResponseEntity.status(HttpStatus.OK).body(storyService.remove(story_id));
    }

    @PreAuthorize("hasPermission(this.storyService.getStoryByIds(#ids),'pms-Story-Remove')")
    @ApiOperation(value = "批量删除需求", tags = {"需求" },  notes = "批量删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/stories/batch")
    public ResponseEntity<Boolean> removeBatch(@RequestBody List<Long> ids) {
        storyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.storyMapping.toDomain(returnObject.body),'pms-Story-Get')")
    @ApiOperation(value = "获取需求", tags = {"需求" },  notes = "获取需求")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}")
    public ResponseEntity<StoryDTO> get(@PathVariable("story_id") Long story_id) {
        Story domain = storyService.get(story_id);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "获取需求草稿", tags = {"需求" },  notes = "获取需求草稿")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/getdraft")
    public ResponseEntity<StoryDTO> getDraft(StoryDTO dto) {
        Story domain = storyMapping.toDomain(dto);
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(storyService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Activate-all')")
    @ApiOperation(value = "激活", tags = {"需求" },  notes = "激活")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/activate")
    public ResponseEntity<StoryDTO> activate(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.activate(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Activate-all')")
    @ApiOperation(value = "批量处理[激活]", tags = {"需求" },  notes = "批量处理[激活]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/activatebatch")
    public ResponseEntity<Boolean> activateBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AllPush-all')")
    @ApiOperation(value = "全部推送", tags = {"需求" },  notes = "全部推送")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/allpush")
    public ResponseEntity<StoryDTO> allPush(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.allPush(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AllPush-all')")
    @ApiOperation(value = "批量处理[全部推送]", tags = {"需求" },  notes = "批量处理[全部推送]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/allpushbatch")
    public ResponseEntity<Boolean> allPushBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.allPushBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AssignTo-all')")
    @ApiOperation(value = "指派", tags = {"需求" },  notes = "指派")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/assignto")
    public ResponseEntity<StoryDTO> assignTo(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.assignTo(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AssignTo-all')")
    @ApiOperation(value = "批量处理[指派]", tags = {"需求" },  notes = "批量处理[指派]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/assigntobatch")
    public ResponseEntity<Boolean> assignToBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchAssignTo-all')")
    @ApiOperation(value = "批量指派", tags = {"需求" },  notes = "批量指派")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchassignto")
    public ResponseEntity<StoryDTO> batchAssignTo(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchAssignTo(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchAssignTo-all')")
    @ApiOperation(value = "批量处理[批量指派]", tags = {"需求" },  notes = "批量处理[批量指派]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchassigntobatch")
    public ResponseEntity<Boolean> batchAssignToBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchAssignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeBranch-all')")
    @ApiOperation(value = "批量变更平台/分支", tags = {"需求" },  notes = "批量变更平台/分支")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangebranch")
    public ResponseEntity<StoryDTO> batchChangeBranch(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchChangeBranch(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeBranch-all')")
    @ApiOperation(value = "批量处理[批量变更平台/分支]", tags = {"需求" },  notes = "批量处理[批量变更平台/分支]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchchangebranchbatch")
    public ResponseEntity<Boolean> batchChangeBranchBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangeBranchBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeModule-all')")
    @ApiOperation(value = "批量变更模块", tags = {"需求" },  notes = "批量变更模块")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangemodule")
    public ResponseEntity<StoryDTO> batchChangeModule(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchChangeModule(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeModule-all')")
    @ApiOperation(value = "批量处理[批量变更模块]", tags = {"需求" },  notes = "批量处理[批量变更模块]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchchangemodulebatch")
    public ResponseEntity<Boolean> batchChangeModuleBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangeModuleBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangePlan-all')")
    @ApiOperation(value = "批量关联计划", tags = {"需求" },  notes = "批量关联计划")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangeplan")
    public ResponseEntity<StoryDTO> batchChangePlan(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchChangePlan(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangePlan-all')")
    @ApiOperation(value = "批量处理[批量关联计划]", tags = {"需求" },  notes = "批量处理[批量关联计划]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchchangeplanbatch")
    public ResponseEntity<Boolean> batchChangePlanBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangePlanBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeStage-all')")
    @ApiOperation(value = "批量变更阶段", tags = {"需求" },  notes = "批量变更阶段")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchchangestage")
    public ResponseEntity<StoryDTO> batchChangeStage(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchChangeStage(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeStage-all')")
    @ApiOperation(value = "批量处理[批量变更阶段]", tags = {"需求" },  notes = "批量处理[批量变更阶段]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchchangestagebatch")
    public ResponseEntity<Boolean> batchChangeStageBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangeStageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchClose-all')")
    @ApiOperation(value = "批量关闭", tags = {"需求" },  notes = "批量关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchclose")
    public ResponseEntity<StoryDTO> batchClose(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchClose(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchClose-all')")
    @ApiOperation(value = "批量处理[批量关闭]", tags = {"需求" },  notes = "批量处理[批量关闭]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchclosebatch")
    public ResponseEntity<Boolean> batchCloseBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchCloseBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchReview-all')")
    @ApiOperation(value = "批量评审", tags = {"需求" },  notes = "批量评审")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchreview")
    public ResponseEntity<StoryDTO> batchReview(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchReview(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchReview-all')")
    @ApiOperation(value = "批量处理[批量评审]", tags = {"需求" },  notes = "批量处理[批量评审]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchreviewbatch")
    public ResponseEntity<Boolean> batchReviewBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchReviewBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchUnlinkStory-all')")
    @ApiOperation(value = "计划批量解除关联需求", tags = {"需求" },  notes = "计划批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/batchunlinkstory")
    public ResponseEntity<StoryDTO> batchUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.batchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchUnlinkStory-all')")
    @ApiOperation(value = "批量处理[计划批量解除关联需求]", tags = {"需求" },  notes = "批量处理[计划批量解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/batchunlinkstorybatch")
    public ResponseEntity<Boolean> batchUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BugToStory-all')")
    @ApiOperation(value = "bug转需求", tags = {"需求" },  notes = "bug转需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/bugtostory")
    public ResponseEntity<StoryDTO> bugToStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.bugToStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BugToStory-all')")
    @ApiOperation(value = "批量处理[bug转需求]", tags = {"需求" },  notes = "批量处理[bug转需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/bugtostorybatch")
    public ResponseEntity<Boolean> bugToStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.bugToStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildBatchUnlinkStory-all')")
    @ApiOperation(value = "版本批量解除关联需求", tags = {"需求" },  notes = "版本批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/buildbatchunlinkstory")
    public ResponseEntity<StoryDTO> buildBatchUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.buildBatchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildBatchUnlinkStory-all')")
    @ApiOperation(value = "批量处理[版本批量解除关联需求]", tags = {"需求" },  notes = "批量处理[版本批量解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/buildbatchunlinkstorybatch")
    public ResponseEntity<Boolean> buildBatchUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.buildBatchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildLinkStory-all')")
    @ApiOperation(value = "项目关联需求", tags = {"需求" },  notes = "项目关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/buildlinkstory")
    public ResponseEntity<StoryDTO> buildLinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.buildLinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildLinkStory-all')")
    @ApiOperation(value = "批量处理[项目关联需求]", tags = {"需求" },  notes = "批量处理[项目关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/buildlinkstorybatch")
    public ResponseEntity<Boolean> buildLinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.buildLinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildUnlinkStory-all')")
    @ApiOperation(value = "版本解除关联需求", tags = {"需求" },  notes = "版本解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/buildunlinkstory")
    public ResponseEntity<StoryDTO> buildUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.buildUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildUnlinkStory-all')")
    @ApiOperation(value = "批量处理[版本解除关联需求]", tags = {"需求" },  notes = "批量处理[版本解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/buildunlinkstorybatch")
    public ResponseEntity<Boolean> buildUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.buildUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildUnlinkStorys-all')")
    @ApiOperation(value = "版本解除关联需求", tags = {"需求" },  notes = "版本解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/buildunlinkstorys")
    public ResponseEntity<StoryDTO> buildUnlinkStorys(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.buildUnlinkStorys(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Change-all')")
    @ApiOperation(value = "变更", tags = {"需求" },  notes = "变更")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/change")
    public ResponseEntity<StoryDTO> change(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.change(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Change-all')")
    @ApiOperation(value = "批量处理[变更]", tags = {"需求" },  notes = "批量处理[变更]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/changebatch")
    public ResponseEntity<Boolean> changeBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.changeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @ApiOperation(value = "检查需求", tags = {"需求" },  notes = "检查需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/checkkey")
    public ResponseEntity<Boolean> checkKey(@RequestBody StoryDTO storydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyService.checkKey(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Close-all')")
    @ApiOperation(value = "关闭", tags = {"需求" },  notes = "关闭")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/close")
    public ResponseEntity<StoryDTO> close(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.close(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Close-all')")
    @ApiOperation(value = "批量处理[关闭]", tags = {"需求" },  notes = "批量处理[关闭]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/closebatch")
    public ResponseEntity<Boolean> closeBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-CreateTasks-all')")
    @ApiOperation(value = "生成任务", tags = {"需求" },  notes = "生成任务")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/createtasks")
    public ResponseEntity<StoryDTO> createTasks(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.createTasks(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-CreateTasks-all')")
    @ApiOperation(value = "批量处理[生成任务]", tags = {"需求" },  notes = "批量处理[生成任务]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/createtasksbatch")
    public ResponseEntity<Boolean> createTasksBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.createTasksBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpec-all')")
    @ApiOperation(value = "获取需求描述", tags = {"需求" },  notes = "获取需求描述")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/getstoryspec")
    public ResponseEntity<StoryDTO> getStorySpec(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.getStorySpec(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpec-all')")
    @ApiOperation(value = "批量处理[获取需求描述]", tags = {"需求" },  notes = "批量处理[获取需求描述]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/getstoryspecbatch")
    public ResponseEntity<Boolean> getStorySpecBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.getStorySpecBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpecs-all')")
    @ApiOperation(value = "获取需求描述", tags = {"需求" },  notes = "获取需求描述")
	@RequestMapping(method = RequestMethod.GET, value = "/stories/{story_id}/getstoryspecs")
    public ResponseEntity<StoryDTO> getStorySpecs(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.getStorySpecs(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ImportPlanStories-all')")
    @ApiOperation(value = "项目关联需求-按计划关联", tags = {"需求" },  notes = "项目关联需求-按计划关联")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/importplanstories")
    public ResponseEntity<StoryDTO> importPlanStories(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.importPlanStories(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ImportPlanStories-all')")
    @ApiOperation(value = "批量处理[项目关联需求-按计划关联]", tags = {"需求" },  notes = "批量处理[项目关联需求-按计划关联]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/importplanstoriesbatch")
    public ResponseEntity<Boolean> importPlanStoriesBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.importPlanStoriesBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-LinkStory-all')")
    @ApiOperation(value = "计划关联需求", tags = {"需求" },  notes = "计划关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/linkstory")
    public ResponseEntity<StoryDTO> linkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.linkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-LinkStory-all')")
    @ApiOperation(value = "批量处理[计划关联需求]", tags = {"需求" },  notes = "批量处理[计划关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/linkstorybatch")
    public ResponseEntity<Boolean> linkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.linkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectBatchUnlinkStory-all')")
    @ApiOperation(value = "项目批量解除关联需求", tags = {"需求" },  notes = "项目批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectbatchunlinkstory")
    public ResponseEntity<StoryDTO> projectBatchUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.projectBatchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectBatchUnlinkStory-all')")
    @ApiOperation(value = "批量处理[项目批量解除关联需求]", tags = {"需求" },  notes = "批量处理[项目批量解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/projectbatchunlinkstorybatch")
    public ResponseEntity<Boolean> projectBatchUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.projectBatchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectLinkStory-all')")
    @ApiOperation(value = "项目关联需求", tags = {"需求" },  notes = "项目关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectlinkstory")
    public ResponseEntity<StoryDTO> projectLinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.projectLinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectLinkStory-all')")
    @ApiOperation(value = "批量处理[项目关联需求]", tags = {"需求" },  notes = "批量处理[项目关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/projectlinkstorybatch")
    public ResponseEntity<Boolean> projectLinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.projectLinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStory-all')")
    @ApiOperation(value = "项目解除关联需求", tags = {"需求" },  notes = "项目解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectunlinkstory")
    public ResponseEntity<StoryDTO> projectUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.projectUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStory-all')")
    @ApiOperation(value = "批量处理[项目解除关联需求]", tags = {"需求" },  notes = "批量处理[项目解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/projectunlinkstorybatch")
    public ResponseEntity<Boolean> projectUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.projectUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStorys-all')")
    @ApiOperation(value = "项目解除关联需求", tags = {"需求" },  notes = "项目解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/projectunlinkstorys")
    public ResponseEntity<StoryDTO> projectUnlinkStorys(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.projectUnlinkStorys(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Push-all')")
    @ApiOperation(value = "推送", tags = {"需求" },  notes = "推送")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/push")
    public ResponseEntity<StoryDTO> push(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.push(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Push-all')")
    @ApiOperation(value = "批量处理[推送]", tags = {"需求" },  notes = "批量处理[推送]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/pushbatch")
    public ResponseEntity<Boolean> pushBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.pushBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseBatchUnlinkStory-all')")
    @ApiOperation(value = "发布批量解除关联需求", tags = {"需求" },  notes = "发布批量解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/releasebatchunlinkstory")
    public ResponseEntity<StoryDTO> releaseBatchUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.releaseBatchUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseBatchUnlinkStory-all')")
    @ApiOperation(value = "批量处理[发布批量解除关联需求]", tags = {"需求" },  notes = "批量处理[发布批量解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/releasebatchunlinkstorybatch")
    public ResponseEntity<Boolean> releaseBatchUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.releaseBatchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseLinkStory-all')")
    @ApiOperation(value = "发布关联需求", tags = {"需求" },  notes = "发布关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/releaselinkstory")
    public ResponseEntity<StoryDTO> releaseLinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.releaseLinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseLinkStory-all')")
    @ApiOperation(value = "批量处理[发布关联需求]", tags = {"需求" },  notes = "批量处理[发布关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/releaselinkstorybatch")
    public ResponseEntity<Boolean> releaseLinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.releaseLinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseUnlinkStory-all')")
    @ApiOperation(value = "发布解除关联需求", tags = {"需求" },  notes = "发布解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/releaseunlinkstory")
    public ResponseEntity<StoryDTO> releaseUnlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.releaseUnlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseUnlinkStory-all')")
    @ApiOperation(value = "批量处理[发布解除关联需求]", tags = {"需求" },  notes = "批量处理[发布解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/releaseunlinkstorybatch")
    public ResponseEntity<Boolean> releaseUnlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.releaseUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ResetReviewedBy-all')")
    @ApiOperation(value = "重置由谁评审", tags = {"需求" },  notes = "重置由谁评审")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/resetreviewedby")
    public ResponseEntity<StoryDTO> resetReviewedBy(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.resetReviewedBy(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ResetReviewedBy-all')")
    @ApiOperation(value = "批量处理[重置由谁评审]", tags = {"需求" },  notes = "批量处理[重置由谁评审]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/resetreviewedbybatch")
    public ResponseEntity<Boolean> resetReviewedByBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.resetReviewedByBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Review-all')")
    @ApiOperation(value = "评审", tags = {"需求" },  notes = "评审")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/review")
    public ResponseEntity<StoryDTO> review(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.review(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Review-all')")
    @ApiOperation(value = "批量处理[评审]", tags = {"需求" },  notes = "批量处理[评审]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/reviewbatch")
    public ResponseEntity<Boolean> reviewBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.reviewBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydto),'pms-Story-Save')")
    @ApiOperation(value = "保存需求", tags = {"需求" },  notes = "保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/save")
    public ResponseEntity<StoryDTO> save(@RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        storyService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydtos),'pms-Story-Save')")
    @ApiOperation(value = "批量保存需求", tags = {"需求" },  notes = "批量保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/savebatch")
    public ResponseEntity<Boolean> saveBatch(@RequestBody List<StoryDTO> storydtos) {
        storyService.saveBatch(storyMapping.toDomain(storydtos));
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SendMessage-all')")
    @ApiOperation(value = "行为", tags = {"需求" },  notes = "行为")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/sendmessage")
    public ResponseEntity<StoryDTO> sendMessage(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.sendMessage(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SendMessage-all')")
    @ApiOperation(value = "批量处理[行为]", tags = {"需求" },  notes = "批量处理[行为]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SendMsgPreProcess-all')")
    @ApiOperation(value = "发送消息前置处理", tags = {"需求" },  notes = "发送消息前置处理")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/sendmsgpreprocess")
    public ResponseEntity<StoryDTO> sendMsgPreProcess(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.sendMsgPreProcess(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SendMsgPreProcess-all')")
    @ApiOperation(value = "批量处理[发送消息前置处理]", tags = {"需求" },  notes = "批量处理[发送消息前置处理]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-StoryFavorites-all')")
    @ApiOperation(value = "需求收藏", tags = {"需求" },  notes = "需求收藏")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/storyfavorites")
    public ResponseEntity<StoryDTO> storyFavorites(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.storyFavorites(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-StoryNFavorites-all')")
    @ApiOperation(value = "取消收藏", tags = {"需求" },  notes = "取消收藏")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/storynfavorites")
    public ResponseEntity<StoryDTO> storyNFavorites(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.storyNFavorites(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SyncFromIbiz-all')")
    @ApiOperation(value = "同步Ibz平台实体", tags = {"需求" },  notes = "同步Ibz平台实体")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/syncfromibiz")
    public ResponseEntity<StoryDTO> syncFromIbiz(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.syncFromIbiz(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SyncFromIbiz-all')")
    @ApiOperation(value = "批量处理[同步Ibz平台实体]", tags = {"需求" },  notes = "批量处理[同步Ibz平台实体]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/syncfromibizbatch")
    public ResponseEntity<Boolean> syncFromIbizBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.syncFromIbizBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-UnlinkStory-all')")
    @ApiOperation(value = "计划解除关联需求", tags = {"需求" },  notes = "计划解除关联需求")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/{story_id}/unlinkstory")
    public ResponseEntity<StoryDTO> unlinkStory(@PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setId(story_id);
        domain = storyService.unlinkStory(domain);
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-UnlinkStory-all')")
    @ApiOperation(value = "批量处理[计划解除关联需求]", tags = {"需求" },  notes = "批量处理[计划解除关联需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/stories/unlinkstorybatch")
    public ResponseEntity<Boolean> unlinkStoryBatch(@RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.unlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取指派给我的需求", tags = {"需求" } ,notes = "获取指派给我的需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchassignedtomystory")
	public ResponseEntity<List<StoryDTO>> fetchAssignedToMyStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchAssignedToMyStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询指派给我的需求", tags = {"需求" } ,notes = "查询指派给我的需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchassignedtomystory")
	public ResponseEntity<Page<StoryDTO>> searchAssignedToMyStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchAssignedToMyStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStoryCalendar-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取指派给我的需求（日历）", tags = {"需求" } ,notes = "获取指派给我的需求（日历）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchassignedtomystorycalendar")
	public ResponseEntity<List<StoryDTO>> fetchAssignedToMyStoryCalendar(StorySearchContext context) {
        Page<Story> domains = storyService.searchAssignedToMyStoryCalendar(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStoryCalendar-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询指派给我的需求（日历）", tags = {"需求" } ,notes = "查询指派给我的需求（日历）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchassignedtomystorycalendar")
	public ResponseEntity<Page<StoryDTO>> searchAssignedToMyStoryCalendar(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchAssignedToMyStoryCalendar(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBugStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取Bug相关需求", tags = {"需求" } ,notes = "获取Bug相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchbugstory")
	public ResponseEntity<List<StoryDTO>> fetchBugStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchBugStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBugStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询Bug相关需求", tags = {"需求" } ,notes = "查询Bug相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbugstory")
	public ResponseEntity<Page<StoryDTO>> searchBugStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBugStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkCompletedStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取版本关联已完成的需求（选择数据源）", tags = {"需求" } ,notes = "获取版本关联已完成的需求（选择数据源）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchbuildlinkcompletedstories")
	public ResponseEntity<List<StoryDTO>> fetchBuildLinkCompletedStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildLinkCompletedStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkCompletedStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询版本关联已完成的需求（选择数据源）", tags = {"需求" } ,notes = "查询版本关联已完成的需求（选择数据源）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbuildlinkcompletedstories")
	public ResponseEntity<Page<StoryDTO>> searchBuildLinkCompletedStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildLinkCompletedStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取版本可关联的需求（产品内）", tags = {"需求" } ,notes = "获取版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchbuildlinkablestories")
	public ResponseEntity<List<StoryDTO>> fetchBuildLinkableStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询版本可关联的需求（产品内）", tags = {"需求" } ,notes = "查询版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbuildlinkablestories")
	public ResponseEntity<Page<StoryDTO>> searchBuildLinkableStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取获取版本相关需求", tags = {"需求" } ,notes = "获取获取版本相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchbuildstories")
	public ResponseEntity<List<StoryDTO>> fetchBuildStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询获取版本相关需求", tags = {"需求" } ,notes = "查询获取版本相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbuildstories")
	public ResponseEntity<Page<StoryDTO>> searchBuildStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchBuildStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取通过模块查询", tags = {"需求" } ,notes = "获取通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchbymodule")
	public ResponseEntity<List<StoryDTO>> fetchByModule(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchByModule(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询通过模块查询", tags = {"需求" } ,notes = "查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchbymodule")
	public ResponseEntity<Page<StoryDTO>> searchByModule(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchCaseStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取相关用例需求", tags = {"需求" } ,notes = "获取相关用例需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchcasestory")
	public ResponseEntity<List<StoryDTO>> fetchCaseStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchCaseStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchCaseStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询相关用例需求", tags = {"需求" } ,notes = "查询相关用例需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchcasestory")
	public ResponseEntity<Page<StoryDTO>> searchCaseStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchCaseStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取DEFAULT", tags = {"需求" } ,notes = "获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchdefault")
	public ResponseEntity<List<StoryDTO>> fetchDefault(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchDefault(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询DEFAULT", tags = {"需求" } ,notes = "查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchdefault")
	public ResponseEntity<Page<StoryDTO>> searchDefault(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchESBulk-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取ES批量的导入", tags = {"需求" } ,notes = "获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchesbulk")
	public ResponseEntity<List<StoryDTO>> fetchESBulk(StorySearchContext context) {
        Page<Story> domains = storyService.searchESBulk(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchESBulk-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询ES批量的导入", tags = {"需求" } ,notes = "查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchesbulk")
	public ResponseEntity<Page<StoryDTO>> searchESBulk(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取获取产品需求", tags = {"需求" } ,notes = "获取获取产品需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchgetproductstories")
	public ResponseEntity<List<StoryDTO>> fetchGetProductStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchGetProductStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询获取产品需求", tags = {"需求" } ,notes = "查询获取产品需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchgetproductstories")
	public ResponseEntity<Page<StoryDTO>> searchGetProductStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchGetProductStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyAgentStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取我代理的需求", tags = {"需求" } ,notes = "获取我代理的需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchmyagentstory")
	public ResponseEntity<List<StoryDTO>> fetchMyAgentStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchMyAgentStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyAgentStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询我代理的需求", tags = {"需求" } ,notes = "查询我代理的需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchmyagentstory")
	public ResponseEntity<Page<StoryDTO>> searchMyAgentStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchMyAgentStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyCurOpenedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取所创建需求数和对应的优先级及状态", tags = {"需求" } ,notes = "获取所创建需求数和对应的优先级及状态")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchmycuropenedstory")
	public ResponseEntity<List<StoryDTO>> fetchMyCurOpenedStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchMyCurOpenedStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyCurOpenedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询所创建需求数和对应的优先级及状态", tags = {"需求" } ,notes = "查询所创建需求数和对应的优先级及状态")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchmycuropenedstory")
	public ResponseEntity<Page<StoryDTO>> searchMyCurOpenedStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchMyCurOpenedStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyFavorites-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取我的收藏", tags = {"需求" } ,notes = "获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchmyfavorites")
	public ResponseEntity<List<StoryDTO>> fetchMyFavorites(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchMyFavorites(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyFavorites-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询我的收藏", tags = {"需求" } ,notes = "查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchmyfavorites")
	public ResponseEntity<Page<StoryDTO>> searchMyFavorites(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchNotCurPlanLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取计划关联需求(去除已关联)", tags = {"需求" } ,notes = "获取计划关联需求(去除已关联)")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchnotcurplanlinkstory")
	public ResponseEntity<List<StoryDTO>> fetchNotCurPlanLinkStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchNotCurPlanLinkStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchNotCurPlanLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询计划关联需求(去除已关联)", tags = {"需求" } ,notes = "查询计划关联需求(去除已关联)")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchnotcurplanlinkstory")
	public ResponseEntity<Page<StoryDTO>> searchNotCurPlanLinkStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchNotCurPlanLinkStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取数据查询", tags = {"需求" } ,notes = "获取数据查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchparentdefault")
	public ResponseEntity<List<StoryDTO>> fetchParentDefault(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchParentDefault(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询数据查询", tags = {"需求" } ,notes = "查询数据查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchparentdefault")
	public ResponseEntity<Page<StoryDTO>> searchParentDefault(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchParentDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefaultQ-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取数据查询", tags = {"需求" } ,notes = "获取数据查询")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchparentdefaultq")
	public ResponseEntity<List<StoryDTO>> fetchParentDefaultQ(StorySearchContext context) {
        Page<Story> domains = storyService.searchParentDefaultQ(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefaultQ-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询数据查询", tags = {"需求" } ,notes = "查询数据查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchparentdefaultq")
	public ResponseEntity<Page<StoryDTO>> searchParentDefaultQ(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchParentDefaultQ(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取项目关联需求", tags = {"需求" } ,notes = "获取项目关联需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchprojectlinkstory")
	public ResponseEntity<List<StoryDTO>> fetchProjectLinkStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchProjectLinkStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询项目关联需求", tags = {"需求" } ,notes = "查询项目关联需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchprojectlinkstory")
	public ResponseEntity<Page<StoryDTO>> searchProjectLinkStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchProjectLinkStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取项目相关需求", tags = {"需求" } ,notes = "获取项目相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchprojectstories")
	public ResponseEntity<List<StoryDTO>> fetchProjectStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchProjectStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询项目相关需求", tags = {"需求" } ,notes = "查询项目相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchprojectstories")
	public ResponseEntity<Page<StoryDTO>> searchProjectStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchProjectStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取版本可关联的完成的需求", tags = {"需求" } ,notes = "获取版本可关联的完成的需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchreleaselinkablestories")
	public ResponseEntity<List<StoryDTO>> fetchReleaseLinkableStories(StorySearchContext context) {
        Page<Story> domains = storyService.searchReleaseLinkableStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询版本可关联的完成的需求", tags = {"需求" } ,notes = "查询版本可关联的完成的需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchreleaselinkablestories")
	public ResponseEntity<Page<StoryDTO>> searchReleaseLinkableStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReleaseLinkableStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取获取产品发布相关需求", tags = {"需求" } ,notes = "获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchreleasestories")
	public ResponseEntity<List<StoryDTO>> fetchReleaseStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReleaseStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询获取产品发布相关需求", tags = {"需求" } ,notes = "查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchreleasestories")
	public ResponseEntity<Page<StoryDTO>> searchReleaseStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReleaseStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取通过模块查询", tags = {"需求" } ,notes = "获取通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/fetchreportstories")
	public ResponseEntity<List<StoryDTO>> fetchReportStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReportStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询通过模块查询", tags = {"需求" } ,notes = "查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchreportstories")
	public ResponseEntity<Page<StoryDTO>> searchReportStories(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchReportStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取获取产品发布相关需求", tags = {"需求" } ,notes = "获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchstorychild")
	public ResponseEntity<List<StoryDTO>> fetchStoryChild(StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryChild(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询获取产品发布相关需求", tags = {"需求" } ,notes = "查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchstorychild")
	public ResponseEntity<Page<StoryDTO>> searchStoryChild(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryChild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取获取产品发布相关需求", tags = {"需求" } ,notes = "获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchstoryrelated")
	public ResponseEntity<List<StoryDTO>> fetchStoryRelated(StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryRelated(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询获取产品发布相关需求", tags = {"需求" } ,notes = "查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchstoryrelated")
	public ResponseEntity<Page<StoryDTO>> searchStoryRelated(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchStoryRelated(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchSubStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取需求细分", tags = {"需求" } ,notes = "获取需求细分")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchsubstory")
	public ResponseEntity<List<StoryDTO>> fetchSubStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchSubStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchSubStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询需求细分", tags = {"需求" } ,notes = "查询需求细分")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchsubstory")
	public ResponseEntity<Page<StoryDTO>> searchSubStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchSubStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取任务相关需求", tags = {"需求" } ,notes = "获取任务相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchtaskrelatedstory")
	public ResponseEntity<List<StoryDTO>> fetchTaskRelatedStory(StorySearchContext context) {
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询任务相关需求", tags = {"需求" } ,notes = "查询任务相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchtaskrelatedstory")
	public ResponseEntity<Page<StoryDTO>> searchTaskRelatedStory(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchView-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "获取默认（全部数据）", tags = {"需求" } ,notes = "获取默认（全部数据）")
    @RequestMapping(method= RequestMethod.GET , value="/stories/fetchview")
	public ResponseEntity<List<StoryDTO>> fetchView(StorySearchContext context) {
        Page<Story> domains = storyService.searchView(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
        return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchView-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "查询默认（全部数据）", tags = {"需求" } ,notes = "查询默认（全部数据）")
    @RequestMapping(method= RequestMethod.POST , value="/stories/searchview")
	public ResponseEntity<Page<StoryDTO>> searchView(@RequestBody StorySearchContext context) {
        Page<Story> domains = storyService.searchView(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}



    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydto),'pms-Story-Create')")
    @ApiOperation(value = "根据产品建立需求", tags = {"需求" },  notes = "根据产品建立需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories")
    public ResponseEntity<StoryDTO> createByProduct(@PathVariable("product_id") Long product_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
		storyService.create(domain);
        StoryDTO dto = storyMapping.toDto(domain);
		return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydtos),'pms-Story-Create')")
    @ApiOperation(value = "根据产品批量建立需求", tags = {"需求" },  notes = "根据产品批量建立需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> createBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
            domain.setProduct(product_id);
        }
        storyService.createBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @VersionCheck(entity = "story" , versionfield = "lastediteddate")
    @PreAuthorize("hasPermission(this.storyService.get(#story_id),'pms-Story-Update')")
    @ApiOperation(value = "根据产品更新需求", tags = {"需求" },  notes = "根据产品更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/{story_id}")
    public ResponseEntity<StoryDTO> updateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain.setId(story_id);
		storyService.update(domain);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @PreAuthorize("hasPermission(this.storyService.getStoryByEntities(this.storyMapping.toDomain(#storydtos)),'pms-Story-Update')")
    @ApiOperation(value = "根据产品批量更新需求", tags = {"需求" },  notes = "根据产品批量更新需求")
	@RequestMapping(method = RequestMethod.PUT, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> updateBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
            domain.setProduct(product_id);
        }
        storyService.updateBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasPermission(this.storyService.get(#story_id),'pms-Story-Remove')")
    @ApiOperation(value = "根据产品删除需求", tags = {"需求" },  notes = "根据产品删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/{story_id}")
    public ResponseEntity<Boolean> removeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id) {
		return ResponseEntity.status(HttpStatus.OK).body(storyService.remove(story_id));
    }

    @PreAuthorize("hasPermission(this.storyService.getStoryByIds(#ids),'pms-Story-Remove')")
    @ApiOperation(value = "根据产品批量删除需求", tags = {"需求" },  notes = "根据产品批量删除需求")
	@RequestMapping(method = RequestMethod.DELETE, value = "/products/{product_id}/stories/batch")
    public ResponseEntity<Boolean> removeBatchByProduct(@RequestBody List<Long> ids) {
        storyService.removeBatch(ids);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PostAuthorize("hasPermission(this.storyMapping.toDomain(returnObject.body),'pms-Story-Get')")
    @ApiOperation(value = "根据产品获取需求", tags = {"需求" },  notes = "根据产品获取需求")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}")
    public ResponseEntity<StoryDTO> getByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id) {
        Story domain = storyService.get(story_id);
        StoryDTO dto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @ApiOperation(value = "根据产品获取需求草稿", tags = {"需求" },  notes = "根据产品获取需求草稿")
    @RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/getdraft")
    public ResponseEntity<StoryDTO> getDraftByProduct(@PathVariable("product_id") Long product_id, StoryDTO dto) {
        Story domain = storyMapping.toDomain(dto);
        domain.setProduct(product_id);
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(storyService.getDraft(domain)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Activate-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/activate")
    public ResponseEntity<StoryDTO> activateByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.activate(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/activatebatch")
    public ResponseEntity<Boolean> activateByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.activateBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AllPush-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/allpush")
    public ResponseEntity<StoryDTO> allPushByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.allPush(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/allpushbatch")
    public ResponseEntity<Boolean> allPushByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.allPushBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-AssignTo-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/assignto")
    public ResponseEntity<StoryDTO> assignToByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.assignTo(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/assigntobatch")
    public ResponseEntity<Boolean> assignToByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.assignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchAssignTo-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchassignto")
    public ResponseEntity<StoryDTO> batchAssignToByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchAssignTo(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchassigntobatch")
    public ResponseEntity<Boolean> batchAssignToByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchAssignToBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeBranch-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangebranch")
    public ResponseEntity<StoryDTO> batchChangeBranchByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangeBranch(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchchangebranchbatch")
    public ResponseEntity<Boolean> batchChangeBranchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangeBranchBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeModule-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangemodule")
    public ResponseEntity<StoryDTO> batchChangeModuleByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangeModule(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchchangemodulebatch")
    public ResponseEntity<Boolean> batchChangeModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangeModuleBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangePlan-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangeplan")
    public ResponseEntity<StoryDTO> batchChangePlanByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangePlan(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchchangeplanbatch")
    public ResponseEntity<Boolean> batchChangePlanByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangePlanBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchChangeStage-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchchangestage")
    public ResponseEntity<StoryDTO> batchChangeStageByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchChangeStage(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchchangestagebatch")
    public ResponseEntity<Boolean> batchChangeStageByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchChangeStageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchClose-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchclose")
    public ResponseEntity<StoryDTO> batchCloseByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchClose(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchclosebatch")
    public ResponseEntity<Boolean> batchCloseByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchCloseBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchReview-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchreview")
    public ResponseEntity<StoryDTO> batchReviewByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchReview(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchreviewbatch")
    public ResponseEntity<Boolean> batchReviewByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchReviewBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/batchunlinkstory")
    public ResponseEntity<StoryDTO> batchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.batchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/batchunlinkstorybatch")
    public ResponseEntity<Boolean> batchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.batchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BugToStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/bugtostory")
    public ResponseEntity<StoryDTO> bugToStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.bugToStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/bugtostorybatch")
    public ResponseEntity<Boolean> bugToStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.bugToStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildBatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/buildbatchunlinkstory")
    public ResponseEntity<StoryDTO> buildBatchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.buildBatchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/buildbatchunlinkstorybatch")
    public ResponseEntity<Boolean> buildBatchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.buildBatchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildLinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/buildlinkstory")
    public ResponseEntity<StoryDTO> buildLinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.buildLinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/buildlinkstorybatch")
    public ResponseEntity<Boolean> buildLinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.buildLinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/buildunlinkstory")
    public ResponseEntity<StoryDTO> buildUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.buildUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/buildunlinkstorybatch")
    public ResponseEntity<Boolean> buildUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.buildUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-BuildUnlinkStorys-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/buildunlinkstorys")
    public ResponseEntity<StoryDTO> buildUnlinkStorysByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.buildUnlinkStorys(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Change-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/change")
    public ResponseEntity<StoryDTO> changeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.change(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/changebatch")
    public ResponseEntity<Boolean> changeByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.changeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @ApiOperation(value = "根据产品检查需求", tags = {"需求" },  notes = "根据产品检查需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/checkkey")
    public ResponseEntity<Boolean> checkKeyByProduct(@PathVariable("product_id") Long product_id, @RequestBody StoryDTO storydto) {
        return  ResponseEntity.status(HttpStatus.OK).body(storyService.checkKey(storyMapping.toDomain(storydto)));
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Close-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/close")
    public ResponseEntity<StoryDTO> closeByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.close(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/closebatch")
    public ResponseEntity<Boolean> closeByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.closeBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-CreateTasks-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/createtasks")
    public ResponseEntity<StoryDTO> createTasksByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.createTasks(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/createtasksbatch")
    public ResponseEntity<Boolean> createTasksByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.createTasksBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpec-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/getstoryspec")
    public ResponseEntity<StoryDTO> getStorySpecByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.getStorySpec(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/getstoryspecbatch")
    public ResponseEntity<Boolean> getStorySpecByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.getStorySpecBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-GetStorySpecs-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.GET, value = "/products/{product_id}/stories/{story_id}/getstoryspecs")
    public ResponseEntity<StoryDTO> getStorySpecsByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.getStorySpecs(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ImportPlanStories-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/importplanstories")
    public ResponseEntity<StoryDTO> importPlanStoriesByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.importPlanStories(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/importplanstoriesbatch")
    public ResponseEntity<Boolean> importPlanStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.importPlanStoriesBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-LinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/linkstory")
    public ResponseEntity<StoryDTO> linkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.linkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/linkstorybatch")
    public ResponseEntity<Boolean> linkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.linkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectBatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectbatchunlinkstory")
    public ResponseEntity<StoryDTO> projectBatchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectBatchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/projectbatchunlinkstorybatch")
    public ResponseEntity<Boolean> projectBatchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.projectBatchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectLinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectlinkstory")
    public ResponseEntity<StoryDTO> projectLinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectLinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/projectlinkstorybatch")
    public ResponseEntity<Boolean> projectLinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.projectLinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectunlinkstory")
    public ResponseEntity<StoryDTO> projectUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/projectunlinkstorybatch")
    public ResponseEntity<Boolean> projectUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.projectUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ProjectUnlinkStorys-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/projectunlinkstorys")
    public ResponseEntity<StoryDTO> projectUnlinkStorysByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.projectUnlinkStorys(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Push-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/push")
    public ResponseEntity<StoryDTO> pushByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.push(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/pushbatch")
    public ResponseEntity<Boolean> pushByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.pushBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseBatchUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/releasebatchunlinkstory")
    public ResponseEntity<StoryDTO> releaseBatchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.releaseBatchUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/releasebatchunlinkstorybatch")
    public ResponseEntity<Boolean> releaseBatchUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.releaseBatchUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseLinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/releaselinkstory")
    public ResponseEntity<StoryDTO> releaseLinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.releaseLinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/releaselinkstorybatch")
    public ResponseEntity<Boolean> releaseLinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.releaseLinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ReleaseUnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/releaseunlinkstory")
    public ResponseEntity<StoryDTO> releaseUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.releaseUnlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/releaseunlinkstorybatch")
    public ResponseEntity<Boolean> releaseUnlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.releaseUnlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-ResetReviewedBy-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/resetreviewedby")
    public ResponseEntity<StoryDTO> resetReviewedByByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.resetReviewedBy(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/resetreviewedbybatch")
    public ResponseEntity<Boolean> resetReviewedByByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.resetReviewedByBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-Review-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/review")
    public ResponseEntity<StoryDTO> reviewByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.review(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/reviewbatch")
    public ResponseEntity<Boolean> reviewByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.reviewBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydto),'pms-Story-Save')")
    @ApiOperation(value = "根据产品保存需求", tags = {"需求" },  notes = "根据产品保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/save")
    public ResponseEntity<StoryDTO> saveByProduct(@PathVariable("product_id") Long product_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        storyService.save(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storyMapping.toDto(domain));
    }

    @PreAuthorize("hasPermission(this.storyMapping.toDomain(#storydtos),'pms-Story-Save')")
    @ApiOperation(value = "根据产品批量保存需求", tags = {"需求" },  notes = "根据产品批量保存需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/savebatch")
    public ResponseEntity<Boolean> saveBatchByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domainlist=storyMapping.toDomain(storydtos);
        for(Story domain:domainlist){
             domain.setProduct(product_id);
        }
        storyService.saveBatch(domainlist);
        return  ResponseEntity.status(HttpStatus.OK).body(true);
    }

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SendMessage-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/sendmessage")
    public ResponseEntity<StoryDTO> sendMessageByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.sendMessage(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/sendmessagebatch")
    public ResponseEntity<Boolean> sendMessageByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.sendMessageBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SendMsgPreProcess-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/sendmsgpreprocess")
    public ResponseEntity<StoryDTO> sendMsgPreProcessByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.sendMsgPreProcess(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/sendmsgpreprocessbatch")
    public ResponseEntity<Boolean> sendMsgPreProcessByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.sendMsgPreProcessBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-StoryFavorites-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/storyfavorites")
    public ResponseEntity<StoryDTO> storyFavoritesByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.storyFavorites(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-StoryNFavorites-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/storynfavorites")
    public ResponseEntity<StoryDTO> storyNFavoritesByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.storyNFavorites(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-SyncFromIbiz-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/syncfromibiz")
    public ResponseEntity<StoryDTO> syncFromIbizByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.syncFromIbiz(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/syncfromibizbatch")
    public ResponseEntity<Boolean> syncFromIbizByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.syncFromIbizBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-UnlinkStory-all')")
    @ApiOperation(value = "根据产品需求", tags = {"需求" },  notes = "根据产品需求")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/{story_id}/unlinkstory")
    public ResponseEntity<StoryDTO> unlinkStoryByProduct(@PathVariable("product_id") Long product_id, @PathVariable("story_id") Long story_id, @RequestBody StoryDTO storydto) {
        Story domain = storyMapping.toDomain(storydto);
        domain.setProduct(product_id);
        domain = storyService.unlinkStory(domain) ;
        storydto = storyMapping.toDto(domain);
        return ResponseEntity.status(HttpStatus.OK).body(storydto);
    }
    @ApiOperation(value = "批量处理[根据产品需求]", tags = {"需求" },  notes = "批量处理[根据产品需求]")
	@RequestMapping(method = RequestMethod.POST, value = "/products/{product_id}/stories/unlinkstorybatch")
    public ResponseEntity<Boolean> unlinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody List<StoryDTO> storydtos) {
        List<Story> domains = storyMapping.toDomain(storydtos);
        boolean result = storyService.unlinkStoryBatch(domains);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取指派给我的需求", tags = {"需求" } ,notes = "根据产品获取指派给我的需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchassignedtomystory")
	public ResponseEntity<List<StoryDTO>> fetchStoryAssignedToMyStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchAssignedToMyStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询指派给我的需求", tags = {"需求" } ,notes = "根据产品查询指派给我的需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchassignedtomystory")
	public ResponseEntity<Page<StoryDTO>> searchStoryAssignedToMyStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchAssignedToMyStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStoryCalendar-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取指派给我的需求（日历）", tags = {"需求" } ,notes = "根据产品获取指派给我的需求（日历）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchassignedtomystorycalendar")
	public ResponseEntity<List<StoryDTO>> fetchStoryAssignedToMyStoryCalendarByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchAssignedToMyStoryCalendar(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchAssignedToMyStoryCalendar-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询指派给我的需求（日历）", tags = {"需求" } ,notes = "根据产品查询指派给我的需求（日历）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchassignedtomystorycalendar")
	public ResponseEntity<Page<StoryDTO>> searchStoryAssignedToMyStoryCalendarByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchAssignedToMyStoryCalendar(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBugStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取Bug相关需求", tags = {"需求" } ,notes = "根据产品获取Bug相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchbugstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryBugStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBugStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBugStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询Bug相关需求", tags = {"需求" } ,notes = "根据产品查询Bug相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbugstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryBugStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBugStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkCompletedStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取版本关联已完成的需求（选择数据源）", tags = {"需求" } ,notes = "根据产品获取版本关联已完成的需求（选择数据源）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchbuildlinkcompletedstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryBuildLinkCompletedStoriesByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildLinkCompletedStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkCompletedStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询版本关联已完成的需求（选择数据源）", tags = {"需求" } ,notes = "根据产品查询版本关联已完成的需求（选择数据源）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbuildlinkcompletedstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryBuildLinkCompletedStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildLinkCompletedStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取版本可关联的需求（产品内）", tags = {"需求" } ,notes = "根据产品获取版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchbuildlinkablestories")
	public ResponseEntity<List<StoryDTO>> fetchStoryBuildLinkableStoriesByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询版本可关联的需求（产品内）", tags = {"需求" } ,notes = "根据产品查询版本可关联的需求（产品内）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbuildlinkablestories")
	public ResponseEntity<Page<StoryDTO>> searchStoryBuildLinkableStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildLinkableStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取获取版本相关需求", tags = {"需求" } ,notes = "根据产品获取获取版本相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchbuildstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryBuildStoriesByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchBuildStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询获取版本相关需求", tags = {"需求" } ,notes = "根据产品查询获取版本相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbuildstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryBuildStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchBuildStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取通过模块查询", tags = {"需求" } ,notes = "根据产品获取通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchbymodule")
	public ResponseEntity<List<StoryDTO>> fetchStoryByModuleByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchByModule(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchByModule-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询通过模块查询", tags = {"需求" } ,notes = "根据产品查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchbymodule")
	public ResponseEntity<Page<StoryDTO>> searchStoryByModuleByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchByModule(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchCaseStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取相关用例需求", tags = {"需求" } ,notes = "根据产品获取相关用例需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchcasestory")
	public ResponseEntity<List<StoryDTO>> fetchStoryCaseStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchCaseStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchCaseStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询相关用例需求", tags = {"需求" } ,notes = "根据产品查询相关用例需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchcasestory")
	public ResponseEntity<Page<StoryDTO>> searchStoryCaseStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchCaseStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取DEFAULT", tags = {"需求" } ,notes = "根据产品获取DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchdefault")
	public ResponseEntity<List<StoryDTO>> fetchStoryDefaultByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchDefault(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询DEFAULT", tags = {"需求" } ,notes = "根据产品查询DEFAULT")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchdefault")
	public ResponseEntity<Page<StoryDTO>> searchStoryDefaultByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchESBulk-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取ES批量的导入", tags = {"需求" } ,notes = "根据产品获取ES批量的导入")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchesbulk")
	public ResponseEntity<List<StoryDTO>> fetchStoryESBulkByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchESBulk(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchESBulk-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询ES批量的导入", tags = {"需求" } ,notes = "根据产品查询ES批量的导入")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchesbulk")
	public ResponseEntity<Page<StoryDTO>> searchStoryESBulkByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchESBulk(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取获取产品需求", tags = {"需求" } ,notes = "根据产品获取获取产品需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchgetproductstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryGetProductStoriesByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchGetProductStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchGetProductStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询获取产品需求", tags = {"需求" } ,notes = "根据产品查询获取产品需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchgetproductstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryGetProductStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchGetProductStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyAgentStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取我代理的需求", tags = {"需求" } ,notes = "根据产品获取我代理的需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchmyagentstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryMyAgentStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchMyAgentStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyAgentStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询我代理的需求", tags = {"需求" } ,notes = "根据产品查询我代理的需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchmyagentstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryMyAgentStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchMyAgentStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyCurOpenedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取所创建需求数和对应的优先级及状态", tags = {"需求" } ,notes = "根据产品获取所创建需求数和对应的优先级及状态")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchmycuropenedstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryMyCurOpenedStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchMyCurOpenedStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyCurOpenedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询所创建需求数和对应的优先级及状态", tags = {"需求" } ,notes = "根据产品查询所创建需求数和对应的优先级及状态")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchmycuropenedstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryMyCurOpenedStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchMyCurOpenedStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyFavorites-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取我的收藏", tags = {"需求" } ,notes = "根据产品获取我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchmyfavorites")
	public ResponseEntity<List<StoryDTO>> fetchStoryMyFavoritesByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchMyFavorites(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchMyFavorites-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询我的收藏", tags = {"需求" } ,notes = "根据产品查询我的收藏")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchmyfavorites")
	public ResponseEntity<Page<StoryDTO>> searchStoryMyFavoritesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchMyFavorites(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchNotCurPlanLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取计划关联需求(去除已关联)", tags = {"需求" } ,notes = "根据产品获取计划关联需求(去除已关联)")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchnotcurplanlinkstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryNotCurPlanLinkStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchNotCurPlanLinkStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchNotCurPlanLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询计划关联需求(去除已关联)", tags = {"需求" } ,notes = "根据产品查询计划关联需求(去除已关联)")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchnotcurplanlinkstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryNotCurPlanLinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchNotCurPlanLinkStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取数据查询", tags = {"需求" } ,notes = "根据产品获取数据查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchparentdefault")
	public ResponseEntity<List<StoryDTO>> fetchStoryParentDefaultByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchParentDefault(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefault-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询数据查询", tags = {"需求" } ,notes = "根据产品查询数据查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchparentdefault")
	public ResponseEntity<Page<StoryDTO>> searchStoryParentDefaultByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchParentDefault(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefaultQ-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取数据查询", tags = {"需求" } ,notes = "根据产品获取数据查询")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchparentdefaultq")
	public ResponseEntity<List<StoryDTO>> fetchStoryParentDefaultQByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchParentDefaultQ(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchParentDefaultQ-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询数据查询", tags = {"需求" } ,notes = "根据产品查询数据查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchparentdefaultq")
	public ResponseEntity<Page<StoryDTO>> searchStoryParentDefaultQByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchParentDefaultQ(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取项目关联需求", tags = {"需求" } ,notes = "根据产品获取项目关联需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchprojectlinkstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryProjectLinkStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchProjectLinkStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectLinkStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询项目关联需求", tags = {"需求" } ,notes = "根据产品查询项目关联需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchprojectlinkstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryProjectLinkStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchProjectLinkStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取项目相关需求", tags = {"需求" } ,notes = "根据产品获取项目相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchprojectstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryProjectStoriesByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchProjectStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchProjectStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询项目相关需求", tags = {"需求" } ,notes = "根据产品查询项目相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchprojectstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryProjectStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchProjectStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取版本可关联的完成的需求", tags = {"需求" } ,notes = "根据产品获取版本可关联的完成的需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchreleaselinkablestories")
	public ResponseEntity<List<StoryDTO>> fetchStoryReleaseLinkableStoriesByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReleaseLinkableStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseLinkableStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询版本可关联的完成的需求", tags = {"需求" } ,notes = "根据产品查询版本可关联的完成的需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchreleaselinkablestories")
	public ResponseEntity<Page<StoryDTO>> searchStoryReleaseLinkableStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReleaseLinkableStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchreleasestories")
	public ResponseEntity<List<StoryDTO>> fetchStoryReleaseStoriesByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReleaseStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReleaseStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchreleasestories")
	public ResponseEntity<Page<StoryDTO>> searchStoryReleaseStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReleaseStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取通过模块查询", tags = {"需求" } ,notes = "根据产品获取通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/fetchreportstories")
	public ResponseEntity<List<StoryDTO>> fetchStoryReportStoriesByProduct(@PathVariable("product_id") Long product_id,@RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReportStories(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchReportStories-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询通过模块查询", tags = {"需求" } ,notes = "根据产品查询通过模块查询")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchreportstories")
	public ResponseEntity<Page<StoryDTO>> searchStoryReportStoriesByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchReportStories(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchstorychild")
	public ResponseEntity<List<StoryDTO>> fetchStoryStoryChildByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryChild(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryChild-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchstorychild")
	public ResponseEntity<Page<StoryDTO>> searchStoryStoryChildByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryChild(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品获取获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchstoryrelated")
	public ResponseEntity<List<StoryDTO>> fetchStoryStoryRelatedByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryRelated(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchStoryRelated-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询获取产品发布相关需求", tags = {"需求" } ,notes = "根据产品查询获取产品发布相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchstoryrelated")
	public ResponseEntity<Page<StoryDTO>> searchStoryStoryRelatedByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchStoryRelated(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchSubStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取需求细分", tags = {"需求" } ,notes = "根据产品获取需求细分")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchsubstory")
	public ResponseEntity<List<StoryDTO>> fetchStorySubStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchSubStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchSubStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询需求细分", tags = {"需求" } ,notes = "根据产品查询需求细分")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchsubstory")
	public ResponseEntity<Page<StoryDTO>> searchStorySubStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchSubStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取任务相关需求", tags = {"需求" } ,notes = "根据产品获取任务相关需求")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchtaskrelatedstory")
	public ResponseEntity<List<StoryDTO>> fetchStoryTaskRelatedStoryByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchTaskRelatedStory-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询任务相关需求", tags = {"需求" } ,notes = "根据产品查询任务相关需求")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchtaskrelatedstory")
	public ResponseEntity<Page<StoryDTO>> searchStoryTaskRelatedStoryByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchTaskRelatedStory(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchView-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品获取默认（全部数据）", tags = {"需求" } ,notes = "根据产品获取默认（全部数据）")
    @RequestMapping(method= RequestMethod.GET , value="/products/{product_id}/stories/fetchview")
	public ResponseEntity<List<StoryDTO>> fetchStoryViewByProduct(@PathVariable("product_id") Long product_id,StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchView(context) ;
        List<StoryDTO> list = storyMapping.toDto(domains.getContent());
	    return ResponseEntity.status(HttpStatus.OK)
                .header("x-page", String.valueOf(context.getPageable().getPageNumber()))
                .header("x-per-page", String.valueOf(context.getPageable().getPageSize()))
                .header("x-total", String.valueOf(domains.getTotalElements()))
                .body(list);
	}

    @PreAuthorize("hasAnyAuthority('ROLE_SUPERADMIN','pms-Story-searchView-all') and hasPermission(#context,'pms-Story-Get')")
	@ApiOperation(value = "根据产品查询默认（全部数据）", tags = {"需求" } ,notes = "根据产品查询默认（全部数据）")
    @RequestMapping(method= RequestMethod.POST , value="/products/{product_id}/stories/searchview")
	public ResponseEntity<Page<StoryDTO>> searchStoryViewByProduct(@PathVariable("product_id") Long product_id, @RequestBody StorySearchContext context) {
        context.setN_product_eq(product_id);
        Page<Story> domains = storyService.searchView(context) ;
	    return ResponseEntity.status(HttpStatus.OK)
                .body(new PageImpl(storyMapping.toDto(domains.getContent()), context.getPageable(), domains.getTotalElements()));
	}
}

