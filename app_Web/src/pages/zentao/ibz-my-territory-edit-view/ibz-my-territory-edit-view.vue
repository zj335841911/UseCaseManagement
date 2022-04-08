<template src="./ibz-my-territory-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryEditViewBase } from './ibz-my-territory-edit-view-base';
import view_form from '@widgets/ibz-my-territory/main-form/main-form.vue';

/**
 * 我的地盘编辑视图视图
 *
 * @export
 * @class IbzMyTerritoryEditView
 * @extends {IbzMyTerritoryEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryEditView extends IbzMyTerritoryEditViewBase {}
</script>
