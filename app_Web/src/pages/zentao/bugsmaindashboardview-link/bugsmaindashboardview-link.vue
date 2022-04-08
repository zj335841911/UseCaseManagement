<template src="./bugsmaindashboardview-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Bugsmaindashboardview_linkBase } from './bugsmaindashboardview-link-base';
import view_dashboard from '@widgets/bug/main-dashboard/main-dashboard.vue';

/**
 * Bug数据看板视图视图
 *
 * @export
 * @class Bugsmaindashboardview_link
 * @extends {Bugsmaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Bugsmaindashboardview_link extends Bugsmaindashboardview_linkBase { }
</script>
