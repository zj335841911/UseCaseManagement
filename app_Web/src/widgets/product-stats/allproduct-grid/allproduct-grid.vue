<template src="./allproduct-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ALLProductGridBase } from './allproduct-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ALLProductGrid
 * @extends {ALLProductGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ALLProductGrid extends ALLProductGridBase {}
</script>
