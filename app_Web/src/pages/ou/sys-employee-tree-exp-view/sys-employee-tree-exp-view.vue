<template src="./sys-employee-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeTreeExpViewBase } from './sys-employee-tree-exp-view-base';
import view_treeexpbar from '@widgets/sys-employee/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 人员树导航视图视图
 *
 * @export
 * @class SysEmployeeTreeExpView
 * @extends {SysEmployeeTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeTreeExpView extends SysEmployeeTreeExpViewBase {}
</script>
