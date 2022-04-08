<template src="./task-kan-ban-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskKanBanPanelBase } from './task-kan-ban-panel-base';
 

/**
 * itemlayoutpanel部件
 *
 * @export
 * @class TaskKanBanPanel
 * @extends {TaskKanBanPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskKanBanPanel extends TaskKanBanPanelBase {}
</script>
<style lang="less">
@import './task-kan-ban-panel.less';
</style>
