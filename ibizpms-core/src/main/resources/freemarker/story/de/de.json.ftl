{
    "codename": "${item.getCodename()}",
    "dename": "${item.getLogicname()}",
    "createdate": "${item.getCreatedate()}",
    "updatedate": "${item.getUpdatedate()}",
    "memo": <#if item.getMemo()??>"${item.getMemo()}"<#else>null</#if>,
    "validflag": ${item.getValidflag()},
    "psmodulename": <#if item.getPsmodulename()??>"${item.getPsmodulename()}"<#else>null</#if>,
    "pssysreqitemname": <#if item.getPssysreqitemname()??>"${item.getPssysreqitemname()}"<#else>null</#if>
}
