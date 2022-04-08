<template src="./monthly-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthlyMainGridBase } from './monthly-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MonthlyMainGrid
 * @extends {MonthlyMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MonthlyMainGrid extends MonthlyMainGridBase {}
</script>
