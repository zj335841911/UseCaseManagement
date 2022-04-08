<template src="./product-team-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTeamPanelBase } from './product-team-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class ProductTeamPanel
 * @extends {ProductTeamPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductTeamPanel extends ProductTeamPanelBase {}
</script>
