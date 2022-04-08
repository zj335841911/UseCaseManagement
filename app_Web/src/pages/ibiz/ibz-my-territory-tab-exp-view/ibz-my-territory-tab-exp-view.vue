<template src="./ibz-my-territory-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryTabExpViewBase } from './ibz-my-territory-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的地盘视图
 *
 * @export
 * @class IbzMyTerritoryTabExpView
 * @extends {IbzMyTerritoryTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryTabExpView extends IbzMyTerritoryTabExpViewBase {}
</script>
