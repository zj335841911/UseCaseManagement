<template src="./product-bugcnt-qa-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugcnt_QAGridBase } from './product-bugcnt-qa-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductBugcnt_QAGrid
 * @extends {ProductBugcnt_QAGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugcnt_QAGrid extends ProductBugcnt_QAGridBase {}
</script>
