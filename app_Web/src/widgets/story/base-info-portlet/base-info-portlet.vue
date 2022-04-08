<template src="./base-info-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BaseInfoPortletBase } from './base-info-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class BaseInfoPortlet
 * @extends {BaseInfoPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BaseInfoPortlet extends BaseInfoPortletBase {}
</script>
