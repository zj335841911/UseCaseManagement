<template src="./block-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BlockEditFormBase } from './block-form-base';
 

/**
 * form部件
 *
 * @export
 * @class BlockEditForm
 * @extends {BlockEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BlockEditForm extends BlockEditFormBase {}
</script>
<style lang="less">
@import './block-form.less';
</style>
