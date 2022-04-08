<template src="./grid-exp-view-project-membergridexpbar-gridexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GridExpViewProjectMembergridexpbarGridexpbarBase } from './grid-exp-view-project-membergridexpbar-gridexpbar-base';
import view_gridexpbar_grid from '@widgets/sys-employee/exp-main-project-member-grid/exp-main-project-member-grid.vue';
 

/**
 * gridexpbar部件
 *
 * @export
 * @class GridExpViewProjectMembergridexpbarGridexpbar
 * @extends {GridExpViewProjectMembergridexpbarGridexpbarBase}
 */
@Component({
    components: {
        view_gridexpbar_grid,
         
    },
})
@VueLifeCycleProcessing()
export default class GridExpViewProjectMembergridexpbarGridexpbar extends GridExpViewProjectMembergridexpbarGridexpbarBase {}
</script>
