<template src="./sys-team-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamGridExpViewBase } from './sys-team-grid-exp-view-base';
import view_gridexpbar from '@widgets/sys-team/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 组表格导航视图视图
 *
 * @export
 * @class SysTeamGridExpView
 * @extends {SysTeamGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamGridExpView extends SysTeamGridExpViewBase {}
</script>
