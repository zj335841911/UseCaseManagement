<template src="./ibizpro-index-index-pickup-data-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproIndexIndexPickupDataViewBase } from './ibizpro-index-index-pickup-data-view-base';
import view_dataview from '@widgets/ibizpro-index/index-type-dataview/index-type-dataview.vue';

/**
 * 索引检索索引关系选择数据视图视图
 *
 * @export
 * @class IbizproIndexIndexPickupDataView
 * @extends {IbizproIndexIndexPickupDataViewBase}
 */
@Component({
    components: {
        view_dataview, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproIndexIndexPickupDataView extends IbizproIndexIndexPickupDataViewBase {}
</script>
