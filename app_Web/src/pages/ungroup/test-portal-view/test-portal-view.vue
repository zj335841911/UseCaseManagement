<template src="./test-portal-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestPortalViewBase } from './test-portal-view-base';
import view_dashboard from '@widgets/app/test-portal-view-db-dashboard/test-portal-view-db-dashboard.vue';

/**
 * 测试主页视图
 *
 * @export
 * @class TestPortalView
 * @extends {TestPortalViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TestPortalView extends TestPortalViewBase {}
</script>
