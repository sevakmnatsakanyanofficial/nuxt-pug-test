<template>
    <div class="newsletter-subscribe">
        <div class="newsletter-subscribe_text">
            Подпишись на рассылку
        </div>

        <div class="newsletter-subscribe_form">
            <form>
                <input class="form-input" name="email" placeholder="Email" type="email">
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