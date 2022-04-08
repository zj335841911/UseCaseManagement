<template src="./product-story-hours-sum-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStoryHoursSumGridBase } from './product-story-hours-sum-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductStoryHoursSumGrid
 * @extends {ProductStoryHoursSumGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStoryHoursSumGrid extends ProductStoryHoursSumGridBase {}
</script>
