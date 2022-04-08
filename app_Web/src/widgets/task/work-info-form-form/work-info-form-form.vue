<template src="./work-info-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WorkInfoFormEditFormBase } from './work-info-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class WorkInfoFormEditForm
 * @extends {WorkInfoFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class WorkInfoFormEditForm extends WorkInfoFormEditFormBase {}
</script>
<style lang="less">
@import './work-info-form-form.less';
</style>
