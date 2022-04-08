<template src="./title-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TitlePortletBase } from './title-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class TitlePortlet
 * @extends {TitlePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TitlePortlet extends TitlePortletBase { }
</script>
