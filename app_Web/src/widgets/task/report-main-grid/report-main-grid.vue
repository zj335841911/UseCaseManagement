<template src="./report-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReportMainGridBase } from './report-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ReportMainGrid
 * @extends {ReportMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ReportMainGrid extends ReportMainGridBase {}
</script>
