<template src="./personal-info-main-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonalInfoMainEditFormBase } from './personal-info-main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class PersonalInfoMainEditForm
 * @extends {PersonalInfoMainEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PersonalInfoMainEditForm extends PersonalInfoMainEditFormBase {}
</script>
