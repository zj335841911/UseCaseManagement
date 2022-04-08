<template src="./sys-update-log-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateLogTabExpViewBase } from './sys-update-log-tab-exp-view-base';
import view_tabexppanel from '@widgets/sys-update-log/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 系统更新日志分页导航视图视图
 *
 * @export
 * @class SysUpdateLogTabExpView
 * @extends {SysUpdateLogTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateLogTabExpView extends SysUpdateLogTabExpViewBase {}
</script>
