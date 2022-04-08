<template src="./test-type-entry-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTypeEntryPortletBase } from './test-type-entry-portlet-base';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class TestTypeEntryPortlet
 * @extends {TestTypeEntryPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestTypeEntryPortlet extends TestTypeEntryPortletBase { }
</script>
