<template src="./main2-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main2SearchFormBase } from './main2-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class Main2SearchForm
 * @extends {Main2SearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main2SearchForm extends Main2SearchFormBase {}
</script>
