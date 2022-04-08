<template src="./build-main-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildMainTabExpViewBase } from './build-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/build/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 版本分页导航视图视图
 *
 * @export
 * @class BuildMainTabExpView
 * @extends {BuildMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class BuildMainTabExpView extends BuildMainTabExpViewBase {}
</script>
