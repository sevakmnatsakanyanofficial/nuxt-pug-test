<template>
    <div class="newsletter-subscribe">
        <div class="newsletter-subscribe_text">
            Подпишись на рассылку
        </div>

        <div class="newsletter-subscribe_form">
            <form>
                <input class="newsletter-subscribe_form_input" name="email" placeholder="Email" type="email">
                <UiArticleButton class="btn-blue" :link="'#'">
                    Подписаться
                </UiArticleButton>
            </form>
        </div>
    </div>
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

    &_text {
        color: #FEFEFE;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: 30px;
    }

    &_form {
        &_input {
            border: none;
            margin-right: 37px;
            background-color: inherit;
            vertical-align: bottom;
            border-bottom: 1px solid var(--grey-color);
            outline: none;
            color: #FEFEFE;

            &:active, &:focus, &:focus-visible {
                border: none;
                background-color: inherit;
                border-bottom: 1px solid var(--grey-color);
                outline: none;
            }

            &:active, &:focus, &:focus-visible {
                border-bottom: 1px solid var(--btn-blue-color);
            }
        }
    }
}
</style>