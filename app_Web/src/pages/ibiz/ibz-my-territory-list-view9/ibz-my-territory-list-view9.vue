<template src="./ibz-my-territory-list-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryListView9Base } from './ibz-my-territory-list-view9-base';
import view_list from '@widgets/ibz-my-territory/my-work-list/my-work-list.vue';

/**
 * 我的工作视图
 *
 * @export
 * @class IbzMyTerritoryListView9
 * @extends {IbzMyTerritoryListView9Base}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryListView9 extends IbzMyTerritoryListView9Base {}
</script>
