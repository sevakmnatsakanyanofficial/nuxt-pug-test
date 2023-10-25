
<template lang="pug">
div.cta-form
    div.cta-form_img
        
    div.cta-form_form
        h3.cta-form_form_heading Стань участником проекта
        form
            input.form-input.w-100(name="firstName" type="text" placeholder="Имя")
            input.form-input.w-100(name="phone" type="text" placeholder="Телефон")
            input.form-input.w-100(name="email" type="email" placeholder="Email")
            UiArticleButton.btn-blue Присоединиться
</template>

<style lang="scss">
.cta-form {
    display: flex;
    justify-content: space-between;
    height: 446px;
    padding: 60px;
    background-color: var(--dark-color);
    color: white;

    &_img {
        background-image: url('img/ctaForm.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 50%;
        height: 100%;
        margin-right: 30px;
        display: none;

        @media screen and (min-width: 768px) {
            display: block;
        }
    }

    &_form {
        width: 50%;
        margin-left: 30px;
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: space-between;

        form {
            display: flex;
            align-items: start;
            flex-direction: column;
            justify-content: space-between;
        }

        &_heading {
            color: #FEFEFE;
            font-family: Montserrat;
            font-size: 34px;
            font-style: normal;
            font-weight: 800;
            line-height: 46px;
        }
    }
}
</style>
