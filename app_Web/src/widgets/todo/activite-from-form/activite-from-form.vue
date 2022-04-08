<template src="./activite-from-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActiviteFROMEditFormBase } from './activite-from-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ActiviteFROMEditForm
 * @extends {ActiviteFROMEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActiviteFROMEditForm extends ActiviteFROMEditFormBase {}
</script>
