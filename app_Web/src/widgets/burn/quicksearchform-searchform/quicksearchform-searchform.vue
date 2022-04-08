<template src="./quicksearchform-searchform.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QuicksearchformSearchFormBase } from './quicksearchform-searchform-base';
 

/**
 * quicksearchform部件
 *
 * @export
 * @class QuicksearchformSearchForm
 * @extends {QuicksearchformSearchFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class QuicksearchformSearchForm extends QuicksearchformSearchFormBase { }
</script>
