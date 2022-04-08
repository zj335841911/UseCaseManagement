<template src="./more-recent-update-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreRecentUpdateGridBase } from './more-recent-update-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MoreRecentUpdateGrid
 * @extends {MoreRecentUpdateGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MoreRecentUpdateGrid extends MoreRecentUpdateGridBase {}
</script>
