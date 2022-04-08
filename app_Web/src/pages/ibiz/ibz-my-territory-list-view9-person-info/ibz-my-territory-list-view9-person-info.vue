<template src="./ibz-my-territory-list-view9-person-info.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryListView9PersonInfoBase } from './ibz-my-territory-list-view9-person-info-base';
import view_list from '@widgets/ibz-my-territory/person-info-my-work-list/person-info-my-work-list.vue';

/**
 * 我的工作视图
 *
 * @export
 * @class IbzMyTerritoryListView9PersonInfo
 * @extends {IbzMyTerritoryListView9PersonInfoBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryListView9PersonInfo extends IbzMyTerritoryListView9PersonInfoBase {}
</script>
