<template src="./report-main-zs-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReportMainZSGridBase } from './report-main-zs-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ReportMainZSGrid
 * @extends {ReportMainZSGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ReportMainZSGrid extends ReportMainZSGridBase {}
</script>
