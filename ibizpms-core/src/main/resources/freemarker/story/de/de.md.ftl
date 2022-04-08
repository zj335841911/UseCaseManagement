## ${item.getLogicname()}
### 【业务实体】
${item.getCodename()}
### 【业务描述】
<#if item.getMemo()??>${item.getMemo()}</#if>
### 【所属模块】
<#if item.getPsmodulename()??>${item.getPsmodulename()}</#if>
### 【关联需求】
<#if item.getPssysreqitemname()??>[[STORY #${item.get("preqnum")}]](<#if item.get("preqlink")??>${item.get("preqlink")}</#if>) ${item.getPssysreqitemname()}</#if>
