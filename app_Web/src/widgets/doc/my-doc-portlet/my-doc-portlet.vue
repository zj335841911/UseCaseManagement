<template src="./my-doc-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyDocPortletBase } from './my-doc-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class MyDocPortlet
 * @extends {MyDocPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyDocPortlet extends MyDocPortletBase {}
</script>
