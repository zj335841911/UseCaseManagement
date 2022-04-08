<template src="./undone-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UndoneProjectPortletBase } from './undone-project-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class UndoneProjectPortlet
 * @extends {UndoneProjectPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UndoneProjectPortlet extends UndoneProjectPortletBase {}
</script>
