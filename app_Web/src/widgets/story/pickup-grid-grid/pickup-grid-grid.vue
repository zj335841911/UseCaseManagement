<template src="./pickup-grid-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PickupGridGridBase } from './pickup-grid-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class PickupGridGrid
 * @extends {PickupGridGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PickupGridGrid extends PickupGridGridBase {}
</script>
