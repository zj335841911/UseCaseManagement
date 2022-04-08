<template src="./ibz-lib-open-lib-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibOpenLibViewBase } from './ibz-lib-open-lib-view-base';
import view_dashboard from '@widgets/ibz-lib/main-dashboard/main-dashboard.vue';

/**
 * 用例库数据看板视图视图
 *
 * @export
 * @class IbzLibOpenLibView
 * @extends {IbzLibOpenLibViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibOpenLibView extends IbzLibOpenLibViewBase {}
</script>
