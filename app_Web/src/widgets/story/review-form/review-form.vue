<template src="./review-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReviewEditFormBase } from './review-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ReviewEditForm
 * @extends {ReviewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ReviewEditForm extends ReviewEditFormBase {}
</script>
