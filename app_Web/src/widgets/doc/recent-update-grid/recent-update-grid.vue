<template src="./recent-update-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { RecentUpdateGridBase } from './recent-update-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class RecentUpdateGrid
 * @extends {RecentUpdateGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class RecentUpdateGrid extends RecentUpdateGridBase {}
</script>
