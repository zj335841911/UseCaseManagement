<template src="./project-team-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamListViewBase } from './project-team-list-view-base';
import view_list from '@widgets/project-team/project-team-pc-list/project-team-pc-list.vue';

/**
 * 项目团队列表视图视图
 *
 * @export
 * @class ProjectTeamListView
 * @extends {ProjectTeamListViewBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTeamListView extends ProjectTeamListViewBase {}
</script>
<style lang="less">
@import './project-team-list-view.less';
</style>
