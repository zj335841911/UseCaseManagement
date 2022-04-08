<template src="./grid-exp-view-teamgridexpbar-gridexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GridExpViewTeamgridexpbarGridexpbarBase } from './grid-exp-view-teamgridexpbar-gridexpbar-base';
import view_gridexpbar_grid from '@widgets/sys-team-member/main-exp-grid/main-exp-grid.vue';
 

/**
 * gridexpbar部件
 *
 * @export
 * @class GridExpViewTeamgridexpbarGridexpbar
 * @extends {GridExpViewTeamgridexpbarGridexpbarBase}
 */
@Component({
    components: {
        view_gridexpbar_grid,
         
    },
})
@VueLifeCycleProcessing()
export default class GridExpViewTeamgridexpbarGridexpbar extends GridExpViewTeamgridexpbarGridexpbarBase {}
</script>
