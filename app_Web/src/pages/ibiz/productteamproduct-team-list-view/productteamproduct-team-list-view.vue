<template src="./productteamproduct-team-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PRODUCTTEAMProductTeamListViewBase } from './productteamproduct-team-list-view-base';
import view_list from '@widgets/productteam/product-team-list/product-team-list.vue';

/**
 * 产品团队列表视图视图
 *
 * @export
 * @class PRODUCTTEAMProductTeamListView
 * @extends {PRODUCTTEAMProductTeamListViewBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class PRODUCTTEAMProductTeamListView extends PRODUCTTEAMProductTeamListViewBase {}
</script>
<style lang="less">
@import './productteamproduct-team-list-view.less';
</style>
