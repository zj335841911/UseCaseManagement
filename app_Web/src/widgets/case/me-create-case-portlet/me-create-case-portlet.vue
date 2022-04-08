<template src="./me-create-case-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MeCreateCasePortletBase } from './me-create-case-portlet-base';
 

/**
 * db_assigntomecaseportlet1部件
 *
 * @export
 * @class MeCreateCasePortlet
 * @extends {MeCreateCasePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MeCreateCasePortlet extends MeCreateCasePortletBase {}
</script>
