<template src="./my-work2-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyWork2PanelBase } from './my-work2-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class MyWork2Panel
 * @extends {MyWork2PanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyWork2Panel extends MyWork2PanelBase {}
</script>
<style lang="less">
@import './my-work2-panel.less';
</style>
