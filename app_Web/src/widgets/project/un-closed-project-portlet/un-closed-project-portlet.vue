<template src="./un-closed-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UnClosedProjectPortletBase } from './un-closed-project-portlet-base';
 

/**
 * db_projectunclosedportlet部件
 *
 * @export
 * @class UnClosedProjectPortlet
 * @extends {UnClosedProjectPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UnClosedProjectPortlet extends UnClosedProjectPortletBase {}
</script>
