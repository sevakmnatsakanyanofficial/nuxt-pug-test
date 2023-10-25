
<template>
    <div class="cta-form">
        <div class="cta-form_img"></div>
        <div class="cta-form_form">
            <h3 class="cta-form_form_heading">Стань участником проекта</h3>
            <form>
                <input class="form-input w-100" name="firstName" type="text" placeholder="Имя"><br>
                <input class="form-input w-100" name="phone" type="text" placeholder="Телефон"><br>
                <input class="form-input w-100" name="email" type="email" placeholder="Email"><br>
                <UiArticleButton class="btn-blue">Присоединиться</UiArticleButton>
            </form>
        </div>
    </div>
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
