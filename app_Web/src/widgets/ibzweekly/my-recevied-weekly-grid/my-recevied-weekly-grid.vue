<template src="./my-recevied-weekly-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyReceviedWeeklyGridBase } from './my-recevied-weekly-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyReceviedWeeklyGrid
 * @extends {MyReceviedWeeklyGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyReceviedWeeklyGrid extends MyReceviedWeeklyGridBase {}
</script>
