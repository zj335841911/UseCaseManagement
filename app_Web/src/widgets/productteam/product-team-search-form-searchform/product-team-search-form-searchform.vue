<template src="./product-team-search-form-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTeamSearchFormSearchFormBase } from './product-team-search-form-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProductTeamSearchFormSearchForm
 * @extends {ProductTeamSearchFormSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductTeamSearchFormSearchForm extends ProductTeamSearchFormSearchFormBase {}
</script>
