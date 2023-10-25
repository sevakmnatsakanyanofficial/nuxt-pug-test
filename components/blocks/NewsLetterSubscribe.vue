<template lang="pug">
div.newsletter-subscribe
    div.newsletter-subscribe_text Подпишись на рассылку

    div.newsletter-subscribe_form
        form
            input.form-input(name="email" placeholder="Email" type="email")
            UiArticleButton.btn-blue(:link="'#'")
                |Подписаться
</template>

<style lang="scss">
.newsletter-subscribe {
    display: flex;
    justify-content: space-between;
    border-radius: 2px;
    background-color: var(--dark-color);
    padding: 35px 30px;
    color: #FEFEFE;
    width: 100%;
    align-items: center;

    &_text {
        color: #FEFEFE;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: 30px;
    }
}
</style>