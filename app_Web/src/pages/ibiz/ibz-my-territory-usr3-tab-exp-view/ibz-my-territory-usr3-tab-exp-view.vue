<template src="./ibz-my-territory-usr3-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryUsr3TabExpViewBase } from './ibz-my-territory-usr3-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/usr3-tab-exp-viewtabexppanel-tabexppanel/usr3-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 管理视图
 *
 * @export
 * @class IbzMyTerritoryUsr3TabExpView
 * @extends {IbzMyTerritoryUsr3TabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryUsr3TabExpView extends IbzMyTerritoryUsr3TabExpViewBase {}
</script>
