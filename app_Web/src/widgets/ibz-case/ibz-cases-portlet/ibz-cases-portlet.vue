<template src="./ibz-cases-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCasesPortletBase } from './ibz-cases-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class IbzCasesPortlet
 * @extends {IbzCasesPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class IbzCasesPortlet extends IbzCasesPortletBase {}
</script>
