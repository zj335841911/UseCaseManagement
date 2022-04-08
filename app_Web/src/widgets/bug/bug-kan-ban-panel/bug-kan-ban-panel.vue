<template src="./bug-kan-ban-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugKanBanPanelBase } from './bug-kan-ban-panel-base';
 

/**
 * itemlayoutpanel部件
 *
 * @export
 * @class BugKanBanPanel
 * @extends {BugKanBanPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugKanBanPanel extends BugKanBanPanelBase {}
</script>
<style lang="less">
@import './bug-kan-ban-panel.less';
</style>
