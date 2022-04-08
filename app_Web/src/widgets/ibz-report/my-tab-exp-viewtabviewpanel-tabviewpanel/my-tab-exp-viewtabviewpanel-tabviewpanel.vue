<template src="./my-tab-exp-viewtabviewpanel-tabviewpanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyTabExpViewtabviewpanelTabviewpanelBase } from './my-tab-exp-viewtabviewpanel-tabviewpanel-base';
 

/**
 * tabviewpanel部件
 *
 * @export
 * @class MyTabExpViewtabviewpanelTabviewpanel
 * @extends {MyTabExpViewtabviewpanelTabviewpanelBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyTabExpViewtabviewpanelTabviewpanel extends MyTabExpViewtabviewpanelTabviewpanelBase {}
</script>
