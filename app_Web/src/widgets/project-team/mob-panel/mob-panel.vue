<template src="./mob-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MobPanelBase } from './mob-panel-base';
 

/**
 * testtasklayoutpanel部件
 *
 * @export
 * @class MobPanel
 * @extends {MobPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MobPanel extends MobPanelBase {}
</script>
<style lang="less">
@import './mob-panel.less';
</style>
