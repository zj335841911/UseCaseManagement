<template src="./company-dynamic-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompanyDynamicStatsGridBase } from './company-dynamic-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class CompanyDynamicStatsGrid
 * @extends {CompanyDynamicStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CompanyDynamicStatsGrid extends CompanyDynamicStatsGridBase {}
</script>
