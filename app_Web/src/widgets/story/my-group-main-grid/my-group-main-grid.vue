<template src="./my-group-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyGroupMainGridBase } from './my-group-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyGroupMainGrid
 * @extends {MyGroupMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyGroupMainGrid extends MyGroupMainGridBase {}
</script>
