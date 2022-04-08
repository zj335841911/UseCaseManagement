<template src="./desc-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DescEditFormBase } from './desc-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DescEditForm
 * @extends {DescEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DescEditForm extends DescEditFormBase {}
</script>
<style lang="less">
@import './desc-form.less';
</style>
