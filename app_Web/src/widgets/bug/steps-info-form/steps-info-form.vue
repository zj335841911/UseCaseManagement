<template src="./steps-info-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StepsInfoEditFormBase } from './steps-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StepsInfoEditForm
 * @extends {StepsInfoEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StepsInfoEditForm extends StepsInfoEditFormBase {}
</script>
<style lang="less">
@import './steps-info-form.less';
</style>
