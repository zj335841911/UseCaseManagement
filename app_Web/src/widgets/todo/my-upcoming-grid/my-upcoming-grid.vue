<template src="./my-upcoming-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyUpcomingGridBase } from './my-upcoming-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyUpcomingGrid
 * @extends {MyUpcomingGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyUpcomingGrid extends MyUpcomingGridBase {}
</script>
