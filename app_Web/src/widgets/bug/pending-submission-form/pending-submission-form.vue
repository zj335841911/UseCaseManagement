<template src="./pending-submission-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PendingSubmissionEditFormBase } from './pending-submission-form-base';
 

/**
 * form部件
 *
 * @export
 * @class PendingSubmissionEditForm
 * @extends {PendingSubmissionEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PendingSubmissionEditForm extends PendingSubmissionEditFormBase {}
</script>
