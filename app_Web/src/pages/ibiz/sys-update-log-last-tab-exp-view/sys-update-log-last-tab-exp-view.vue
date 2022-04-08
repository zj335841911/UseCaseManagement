<template src="./sys-update-log-last-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateLogLastTabExpViewBase } from './sys-update-log-last-tab-exp-view-base';
import view_tabexppanel from '@widgets/sys-update-log/last-tab-exp-viewtabexppanel-tabexppanel/last-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 系统更新日志分页导航视图视图
 *
 * @export
 * @class SysUpdateLogLastTabExpView
 * @extends {SysUpdateLogLastTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateLogLastTabExpView extends SysUpdateLogLastTabExpViewBase {}
</script>
