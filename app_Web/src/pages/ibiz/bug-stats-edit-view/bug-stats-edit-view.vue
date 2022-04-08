<template src="./bug-stats-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsEditViewBase } from './bug-stats-edit-view-base';
import view_form from '@widgets/bug-stats/main-form/main-form.vue';

/**
 * Bug统计编辑视图视图
 *
 * @export
 * @class BugStatsEditView
 * @extends {BugStatsEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsEditView extends BugStatsEditViewBase {}
</script>
