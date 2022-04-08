<template src="./assignto-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssigntoFormEditFormBase } from './assignto-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class AssigntoFormEditForm
 * @extends {AssigntoFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssigntoFormEditForm extends AssigntoFormEditFormBase {}
</script>
