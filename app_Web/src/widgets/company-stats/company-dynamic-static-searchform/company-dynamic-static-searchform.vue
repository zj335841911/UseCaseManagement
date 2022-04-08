<template src="./company-dynamic-static-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompanyDynamicStaticSearchFormBase } from './company-dynamic-static-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class CompanyDynamicStaticSearchForm
 * @extends {CompanyDynamicStaticSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CompanyDynamicStaticSearchForm extends CompanyDynamicStaticSearchFormBase {}
</script>
