<template src="./product-story-sum-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStorySumSearchFormBase } from './product-story-sum-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProductStorySumSearchForm
 * @extends {ProductStorySumSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStorySumSearchForm extends ProductStorySumSearchFormBase {}
</script>
