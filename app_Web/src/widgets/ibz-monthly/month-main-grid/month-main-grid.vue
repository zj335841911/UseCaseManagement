<template src="./month-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthMainGridBase } from './month-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MonthMainGrid
 * @extends {MonthMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MonthMainGrid extends MonthMainGridBase {}
</script>
