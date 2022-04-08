<template src="./user-main-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserMainGridViewBase } from './user-main-grid-view-base';
import view_grid from '@widgets/user/main-grid/main-grid.vue';

/**
 * 用户表格视图视图
 *
 * @export
 * @class UserMainGridView
 * @extends {UserMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class UserMainGridView extends UserMainGridViewBase { }
</script>
