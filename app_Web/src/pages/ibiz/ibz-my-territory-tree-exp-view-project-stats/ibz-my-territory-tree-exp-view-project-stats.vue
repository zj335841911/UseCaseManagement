<template src="./ibz-my-territory-tree-exp-view-project-stats.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryTreeExpViewProjectStatsBase } from './ibz-my-territory-tree-exp-view-project-stats-base';
import view_treeexpbar from '@widgets/ibz-my-territory/tree-exp-view-project-statstreeexpbar-treeexpbar/tree-exp-view-project-statstreeexpbar-treeexpbar.vue';

/**
 * 我的地盘我的地盘实体树导航视图（项目汇总表）导航视图视图
 *
 * @export
 * @class IbzMyTerritoryTreeExpViewProjectStats
 * @extends {IbzMyTerritoryTreeExpViewProjectStatsBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryTreeExpViewProjectStats extends IbzMyTerritoryTreeExpViewProjectStatsBase {}
</script>
