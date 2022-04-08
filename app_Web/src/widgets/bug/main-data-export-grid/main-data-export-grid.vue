<template src="./main-data-export-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_DataExportGridBase } from './main-data-export-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_DataExportGrid
 * @extends {Main_DataExportGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_DataExportGrid extends Main_DataExportGridBase {}
</script>
