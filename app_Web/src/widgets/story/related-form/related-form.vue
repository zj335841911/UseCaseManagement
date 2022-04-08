<template src="./related-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { RelatedEditFormBase } from './related-form-base';
 

/**
 * form部件
 *
 * @export
 * @class RelatedEditForm
 * @extends {RelatedEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class RelatedEditForm extends RelatedEditFormBase {}
</script>
