<template src="./sys-post-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysPostUsr2GridViewBase } from './sys-post-usr2-grid-view-base';
import view_grid from '@widgets/sys-post/main-concat-grid/main-concat-grid.vue';
import view_searchform from '@widgets/sys-post/default-searchform/default-searchform.vue';

/**
 * 岗位表格视图视图
 *
 * @export
 * @class SysPostUsr2GridView
 * @extends {SysPostUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysPostUsr2GridView extends SysPostUsr2GridViewBase {}
</script>
