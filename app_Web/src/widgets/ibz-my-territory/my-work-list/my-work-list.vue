<template src="./my-work-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyWorkListBase } from './my-work-list-base';
import layout_list_itempanel from '@widgets/ibz-my-territory/my-work2-panel/my-work2-panel.vue';
 

/**
 * list部件
 *
 * @export
 * @class MyWorkList
 * @extends {MyWorkListBase}
 */
@Component({
    components: {
        layout_list_itempanel,
         
    },
})
@VueLifeCycleProcessing()
export default class MyWorkList extends MyWorkListBase {}
</script>
