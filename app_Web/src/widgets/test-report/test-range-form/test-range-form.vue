<template src="./test-range-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestRangeEditFormBase } from './test-range-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TestRangeEditForm
 * @extends {TestRangeEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestRangeEditForm extends TestRangeEditFormBase {}
</script>
