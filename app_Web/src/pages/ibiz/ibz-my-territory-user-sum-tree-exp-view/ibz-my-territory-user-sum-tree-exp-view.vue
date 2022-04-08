<template src="./ibz-my-territory-user-sum-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryUserSumTreeExpViewBase } from './ibz-my-territory-user-sum-tree-exp-view-base';
import view_treeexpbar from '@widgets/ibz-my-territory/user-sum-tree-exp-viewtreeexpbar-treeexpbar/user-sum-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 我的地盘树导航视图视图
 *
 * @export
 * @class IbzMyTerritoryUserSumTreeExpView
 * @extends {IbzMyTerritoryUserSumTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryUserSumTreeExpView extends IbzMyTerritoryUserSumTreeExpViewBase {}
</script>
