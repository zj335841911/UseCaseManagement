<template src="./test-case-stats-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestCaseStatsSearchFormBase } from './test-case-stats-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class TestCaseStatsSearchForm
 * @extends {TestCaseStatsSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestCaseStatsSearchForm extends TestCaseStatsSearchFormBase {}
</script>
