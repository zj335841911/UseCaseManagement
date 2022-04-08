<template src="./index-mob2-panel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IndexMob2PanelBase } from './index-mob2-panel-base';
 

/**
 * list_itempanel部件
 *
 * @export
 * @class IndexMob2Panel
 * @extends {IndexMob2PanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class IndexMob2Panel extends IndexMob2PanelBase {}
</script>
