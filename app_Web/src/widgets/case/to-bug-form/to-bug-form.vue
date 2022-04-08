<template src="./to-bug-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ToBugEditFormBase } from './to-bug-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ToBugEditForm
 * @extends {ToBugEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ToBugEditForm extends ToBugEditFormBase {}
</script>
<style lang="less">
@import './to-bug-form.less';
</style>
