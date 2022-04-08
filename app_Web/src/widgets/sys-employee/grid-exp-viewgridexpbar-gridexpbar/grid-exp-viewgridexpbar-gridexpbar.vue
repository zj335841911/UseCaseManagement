<template src="./grid-exp-viewgridexpbar-gridexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GridExpViewgridexpbarGridexpbarBase } from './grid-exp-viewgridexpbar-gridexpbar-base';
import view_gridexpbar_grid from '@widgets/sys-employee/exp-main-grid/exp-main-grid.vue';
 

/**
 * gridexpbar部件
 *
 * @export
 * @class GridExpViewgridexpbarGridexpbar
 * @extends {GridExpViewgridexpbarGridexpbarBase}
 */
@Component({
    components: {
        view_gridexpbar_grid,
         
    },
})
@VueLifeCycleProcessing()
export default class GridExpViewgridexpbarGridexpbar extends GridExpViewgridexpbarGridexpbarBase {}
</script>
