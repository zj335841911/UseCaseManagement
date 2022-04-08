<template src="./pivot-table-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PivotTableGridBase } from './pivot-table-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PivotTableGrid
 * @extends {PivotTableGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PivotTableGrid extends PivotTableGridBase {}
</script>
