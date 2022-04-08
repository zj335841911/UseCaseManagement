<template src="./ibz-lib-cz-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibCzPortletBase } from './ibz-lib-cz-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class IbzLibCzPortlet
 * @extends {IbzLibCzPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class IbzLibCzPortlet extends IbzLibCzPortletBase {}
</script>
