<template src="./sys-update-log-last-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateLogLastGridViewBase } from './sys-update-log-last-grid-view-base';
import view_grid from '@widgets/sys-update-log/look-main-grid/look-main-grid.vue';

/**
 * 系统更新日志表格视图视图
 *
 * @export
 * @class SysUpdateLogLastGridView
 * @extends {SysUpdateLogLastGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateLogLastGridView extends SysUpdateLogLastGridViewBase {}
</script>
