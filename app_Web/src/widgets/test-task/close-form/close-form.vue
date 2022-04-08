<template src="./close-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CloseEditFormBase } from './close-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CloseEditForm
 * @extends {CloseEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CloseEditForm extends CloseEditFormBase {}
</script>
<style lang="less">
@import './close-form.less';
</style>
