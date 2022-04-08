<template src="./product-bug-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugSearchFormBase } from './product-bug-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProductBugSearchForm
 * @extends {ProductBugSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugSearchForm extends ProductBugSearchFormBase {}
</script>
