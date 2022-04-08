<template src="./taskreport-mpickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskreportMPickupViewBase } from './taskreport-mpickup-view-base';
import view_pickupviewpanel from '@widgets/task/report-mpickup-viewpickupviewpanel-pickupviewpanel/report-mpickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 任务数据多项选择视图（汇报）视图
 *
 * @export
 * @class TaskreportMPickupView
 * @extends {TaskreportMPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class TaskreportMPickupView extends TaskreportMPickupViewBase {}
</script>
