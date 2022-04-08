<template src="./main-plan-sub-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_PlanSubGridBase } from './main-plan-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_PlanSubGrid
 * @extends {Main_PlanSubGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_PlanSubGrid extends Main_PlanSubGridBase {}
</script>
