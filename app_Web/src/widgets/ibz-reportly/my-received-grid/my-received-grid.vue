<template src="./my-received-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyReceivedGridBase } from './my-received-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyReceivedGrid
 * @extends {MyReceivedGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyReceivedGrid extends MyReceivedGridBase {}
</script>
