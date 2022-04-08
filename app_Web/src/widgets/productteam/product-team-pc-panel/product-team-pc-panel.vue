<template src="./product-team-pc-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTeamPcPanelBase } from './product-team-pc-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class ProductTeamPcPanel
 * @extends {ProductTeamPcPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductTeamPcPanel extends ProductTeamPcPanelBase {}
</script>
<style lang="less">
@import './product-team-pc-panel.less';
</style>
