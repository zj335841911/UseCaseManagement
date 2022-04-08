<template src="./person-info-mian-ban-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonInfoMianBanPanelBase } from './person-info-mian-ban-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class PersonInfoMianBanPanel
 * @extends {PersonInfoMianBanPanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PersonInfoMianBanPanel extends PersonInfoMianBanPanelBase {}
</script>
<style lang="less">
@import './person-info-mian-ban-panel.less';
</style>
