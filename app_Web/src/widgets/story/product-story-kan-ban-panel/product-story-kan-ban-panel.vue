<template src="./product-story-kan-ban-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStoryKanBanPanelBase } from './product-story-kan-ban-panel-base';
 

/**
 * itemlayoutpanel部件
 *
 * @export
 * @class ProductStoryKanBanPanel
 * @extends {ProductStoryKanBanPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStoryKanBanPanel extends ProductStoryKanBanPanelBase {}
</script>
