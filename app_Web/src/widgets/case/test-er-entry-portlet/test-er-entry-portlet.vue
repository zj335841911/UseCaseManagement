<template src="./test-er-entry-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestErEntryPortletBase } from './test-er-entry-portlet-base';
 

/**
 * dashboard_sysportlet8部件
 *
 * @export
 * @class TestErEntryPortlet
 * @extends {TestErEntryPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestErEntryPortlet extends TestErEntryPortletBase { }
</script>
