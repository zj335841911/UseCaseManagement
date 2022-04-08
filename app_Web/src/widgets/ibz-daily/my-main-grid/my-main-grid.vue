<template src="./my-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyMainGridBase } from './my-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyMainGrid
 * @extends {MyMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyMainGrid extends MyMainGridBase {}
</script>
