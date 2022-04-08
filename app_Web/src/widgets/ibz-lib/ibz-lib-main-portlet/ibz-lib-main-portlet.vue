<template src="./ibz-lib-main-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibMainPortletBase } from './ibz-lib-main-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class IbzLibMainPortlet
 * @extends {IbzLibMainPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class IbzLibMainPortlet extends IbzLibMainPortletBase {}
</script>
