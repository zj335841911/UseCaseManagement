<template src="./my-work-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyWorkPortletBase } from './my-work-portlet-base';
 

/**
 * portlet_MyWork部件
 *
 * @export
 * @class MyWorkPortlet
 * @extends {MyWorkPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyWorkPortlet extends MyWorkPortletBase {}
</script>
