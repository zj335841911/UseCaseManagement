<template src="./bug-resolved-by-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedBySearchFormBase } from './bug-resolved-by-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class BugResolvedBySearchForm
 * @extends {BugResolvedBySearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedBySearchForm extends BugResolvedBySearchFormBase {}
</script>
