<template src="./main-sub-plan-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainSubPlanGridBase } from './main-sub-plan-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainSubPlanGrid
 * @extends {MainSubPlanGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainSubPlanGrid extends MainSubPlanGridBase {}
</script>
