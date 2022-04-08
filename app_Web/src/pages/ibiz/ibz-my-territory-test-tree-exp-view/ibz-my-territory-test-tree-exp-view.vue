<template src="./ibz-my-territory-test-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryTestTreeExpViewBase } from './ibz-my-territory-test-tree-exp-view-base';
import view_treeexpbar from '@widgets/ibz-my-territory/test-tree-exp-viewtreeexpbar-treeexpbar/test-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 我的地盘树导航视图（测试统计）视图
 *
 * @export
 * @class IbzMyTerritoryTestTreeExpView
 * @extends {IbzMyTerritoryTestTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryTestTreeExpView extends IbzMyTerritoryTestTreeExpViewBase {}
</script>
