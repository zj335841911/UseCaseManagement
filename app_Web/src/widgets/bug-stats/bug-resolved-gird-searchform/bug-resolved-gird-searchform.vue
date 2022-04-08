<template src="./bug-resolved-gird-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedGirdSearchFormBase } from './bug-resolved-gird-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class BugResolvedGirdSearchForm
 * @extends {BugResolvedGirdSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedGirdSearchForm extends BugResolvedGirdSearchFormBase {}
</script>
