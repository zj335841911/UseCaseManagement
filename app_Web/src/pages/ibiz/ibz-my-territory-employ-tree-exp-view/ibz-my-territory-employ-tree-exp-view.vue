<template src="./ibz-my-territory-employ-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryEmployTreeExpViewBase } from './ibz-my-territory-employ-tree-exp-view-base';
import view_treeexpbar from '@widgets/ibz-my-territory/employ-tree-exp-viewtreeexpbar-treeexpbar/employ-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 我的地盘树导航视图（员工负载计）视图
 *
 * @export
 * @class IbzMyTerritoryEmployTreeExpView
 * @extends {IbzMyTerritoryEmployTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryEmployTreeExpView extends IbzMyTerritoryEmployTreeExpViewBase {}
</script>
