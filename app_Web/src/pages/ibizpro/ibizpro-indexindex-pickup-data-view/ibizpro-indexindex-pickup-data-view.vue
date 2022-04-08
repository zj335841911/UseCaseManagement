<template src="./ibizpro-indexindex-pickup-data-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZPRO_INDEXIndexPickupDataViewBase } from './ibizpro-indexindex-pickup-data-view-base';
import view_dataview from '@widgets/ibizpro-index/index-type-dataview/index-type-dataview.vue';

/**
 * 索引检索索引关系选择数据视图视图
 *
 * @export
 * @class IBIZPRO_INDEXIndexPickupDataView
 * @extends {IBIZPRO_INDEXIndexPickupDataViewBase}
 */
@Component({
    components: {
        view_dataview, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZPRO_INDEXIndexPickupDataView extends IBIZPRO_INDEXIndexPickupDataViewBase {}
</script>
