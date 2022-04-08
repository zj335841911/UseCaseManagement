<template src="./release-main-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseMainTabExpViewBase } from './release-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/release/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 发布分页导航视图视图
 *
 * @export
 * @class ReleaseMainTabExpView
 * @extends {ReleaseMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class ReleaseMainTabExpView extends ReleaseMainTabExpViewBase {}
</script>
