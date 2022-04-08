<template src="./assigned-tobug-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedTOBugSearchFormBase } from './assigned-tobug-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class AssignedTOBugSearchForm
 * @extends {AssignedTOBugSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignedTOBugSearchForm extends AssignedTOBugSearchFormBase {}
</script>
