<template src="./exp-main-dept-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpMainDeptGridBase } from './exp-main-dept-grid-base';
 

/**
 * gridexpbar_grid部件
 *
 * @export
 * @class ExpMainDeptGrid
 * @extends {ExpMainDeptGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ExpMainDeptGrid extends ExpMainDeptGridBase {}
</script>
