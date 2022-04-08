<template src="./dept-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DeptMainGridViewBase } from './dept-main-grid-view-base';
import view_grid from '@widgets/dept/main-grid/main-grid.vue';

/**
 * 部门视图
 *
 * @export
 * @class DeptMainGridView
 * @extends {DeptMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class DeptMainGridView extends DeptMainGridViewBase { }
</script>
