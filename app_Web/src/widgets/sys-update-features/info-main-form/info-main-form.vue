<template src="./info-main-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InfoMainEditFormBase } from './info-main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class InfoMainEditForm
 * @extends {InfoMainEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class InfoMainEditForm extends InfoMainEditFormBase {}
</script>
