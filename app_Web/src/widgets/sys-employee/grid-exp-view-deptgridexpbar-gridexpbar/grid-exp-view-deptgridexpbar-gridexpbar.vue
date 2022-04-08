<template src="./grid-exp-view-deptgridexpbar-gridexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GridExpViewDeptgridexpbarGridexpbarBase } from './grid-exp-view-deptgridexpbar-gridexpbar-base';
import view_gridexpbar_grid from '@widgets/sys-employee/exp-main-dept-grid/exp-main-dept-grid.vue';
 

/**
 * gridexpbar部件
 *
 * @export
 * @class GridExpViewDeptgridexpbarGridexpbar
 * @extends {GridExpViewDeptgridexpbarGridexpbarBase}
 */
@Component({
    components: {
        view_gridexpbar_grid,
         
    },
})
@VueLifeCycleProcessing()
export default class GridExpViewDeptgridexpbarGridexpbar extends GridExpViewDeptgridexpbarGridexpbarBase {}
</script>
