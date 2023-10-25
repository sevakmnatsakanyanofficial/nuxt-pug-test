
<template>
    <Footer class="footer">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col">
                    <Img src="/img/Logo.svg" />
                    <p class="footer_about">
                        Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции,
                        раскрывая мир эстетики и креативности
                    </p>
                </div>

                <div class="col" style="padding-right: 78px;">
                    <div class="footer_contact">
                        <address class="contact-email">
                            <span class="contact-email_label">email</span><br>
                            <a class="contact-email_data"
                                href="email:testblogsupport@gmail.com">testblogsupport@gmail.com</a>
                        </address>
                        <div class="social">
                            <UiFacebookIcon />
                            <UiVkIcon />
                            <UiInstagramIcon />
                            <UiTelegramIcon />
                        </div>
                    </div>
                </div>
            </div>

            <div style="height: 70px;"></div>

            <div class="row footer-newslatter justify-content-between">
                <BlocksNewsLetterSubscribe />
            </div>
        </div>
    </Footer>
</template>

<script>

</script>

<style lang="scss">
.footer_contact {
    display: flex;
    align-items: end;
    flex-direction: column;
}

.footer {
    border-top: 1px solid #8D959C;

    .container {
        padding-top: 50px;
        padding-bottom: 0;

        .contact-email {
            margin-top: 14px;

            &_label {
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                color: var(--muted-text-color);
            }

            &_data {
                font-family: Ubuntu;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
            }

        }
    }

    .social {
        padding-top: 20px;

        svg {
            width: 30px;
            height: 30px;

            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }

    img {
        @media screen and (min-width: 576px) {
            transform: translateX(-15px);
        }
    }

    .footer_about {
        color: var(--muted-text-color);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        max-width: 426px;

        @media screen and (min-width: 576px) {
            transform: translateX(-15px);
        }
    }
}
</style>