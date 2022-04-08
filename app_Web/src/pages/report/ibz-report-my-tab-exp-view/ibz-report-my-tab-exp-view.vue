<template src="./ibz-report-my-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportMyTabExpViewBase } from './ibz-report-my-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-report/my-tab-exp-viewtabexppanel-tabexppanel/my-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 汇报分页导航视图（我收到的）视图
 *
 * @export
 * @class IbzReportMyTabExpView
 * @extends {IbzReportMyTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportMyTabExpView extends IbzReportMyTabExpViewBase {}
</script>
