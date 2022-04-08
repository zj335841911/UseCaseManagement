<template src="./activite-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActiviteEditFormBase } from './activite-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ActiviteEditForm
 * @extends {ActiviteEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActiviteEditForm extends ActiviteEditFormBase {}
</script>
<style lang="less">
@import './activite-form.less';
</style>
