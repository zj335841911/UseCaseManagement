<template src="./default-searchform.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DefaultSearchFormBase } from './default-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class DefaultSearchForm
 * @extends {DefaultSearchFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DefaultSearchForm extends DefaultSearchFormBase { }
</script>
