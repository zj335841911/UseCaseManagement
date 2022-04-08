<template src="./action-project-trends-list-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionProjectTrendsListView9Base } from './action-project-trends-list-view9-base';
import view_list from '@widgets/action/trends-list/trends-list.vue';

/**
 * 产品动态视图
 *
 * @export
 * @class ActionProjectTrendsListView9
 * @extends {ActionProjectTrendsListView9Base}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ActionProjectTrendsListView9 extends ActionProjectTrendsListView9Base {}
</script>
