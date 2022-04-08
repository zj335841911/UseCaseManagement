<template src="./story-kan-ban-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryKanBanPanelBase } from './story-kan-ban-panel-base';
 

/**
 * itemlayoutpanel部件
 *
 * @export
 * @class StoryKanBanPanel
 * @extends {StoryKanBanPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryKanBanPanel extends StoryKanBanPanelBase {}
</script>
