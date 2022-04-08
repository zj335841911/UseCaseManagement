<template src="./doc-summary-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocSummaryEditFormBase } from './doc-summary-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DocSummaryEditForm
 * @extends {DocSummaryEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocSummaryEditForm extends DocSummaryEditFormBase {}
</script>
