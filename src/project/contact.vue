<script setup>
import foot from '../components/theFooter.vue'
import theHeader from '../components/theHeader.vue'
</script>

<template>
    <theHeader />
    <section class="contact">
        <div class="text-content">
            <div class="title">
                Contact
            </div>
            <h1>
                Have you any project? <br> Drop a message!
            </h1>
            <p>
                Get in touch and let me know if I can help!
                Fill out the form and I'll be in touch as soon as possible
            </p>
            <ul>
                <li>
                    <div class="box-find-me">
                        <fa icon="envelope"></fa>
                        <div>
                            <h3>Address</h3>
                            <p>Luanda, Angola</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="box-find-me">
                        <fa icon="phone"></fa>
                        <div>
                            <h3>Phone</h3>
                            <a href="tel:+">(+244) 923 287 660</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="box-find-me">
                        <fa icon="envelope"></fa>
                        <div>
                            <h3>Email</h3>
                            <a href="mailto:">dionisioni304@gmail.com</a>
                        </div>
                    </div>
                </li>
            </ul>
                     
            
        </div>
        <div class="form-content">
            <label for="name">
                <span>Name</span>
                <div class="input">
                    <fa icon="user"></fa>
                    <input type="text" placeholder="Your Name" id="name">
                </div>
            </label>

            <label for="email">
                <span>Email</span>
                <div class="input">
                    <fa icon="envelope"></fa>
                    <input type="text" placeholder="email@domain.com" id="email">
                </div>
            </label>

            <label for="phone">
                <span>Phone</span>
                <div class="input">
                    <fa icon="phone"></fa>
                    <input type="text" placeholder="Phone Number" id="phone">
                </div>
            </label>

            <label for="message">
                <span>Message</span>
                <div class="input">
                    <fa icon="comment"></fa>
                    <textarea id="message" placeholder="Write Your Message"></textarea>
                </div>
            </label>

            <fa icon=""></fa>

            <input type="button" value="SEND">
        </div>
    </section>

    <foot />
</template>

<style>
    section.contact{
        display: flex;
        justify-content: space-around;
        padding: 115px;
        gap: 10px;
    }

    div.text-content{
        max-width: 535px;
    }

    div.text-content h1{
        font-size: 40px;
        margin-bottom: 20px;
    }

    div.text-content p{
        font-weight: 300;
        margin-bottom: 20px;
    }

    div.text-content ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    div.text-content .box-find-me{
        display: flex;
        gap: 25px;
    }

    div.text-content .box-find-me a,
    div.text-content .box-find-me p{
        font-weight: 300;
        margin-top: 10px;
    }

    section.contact div.form-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: var(--bg-secondary);
        border-radius: var(--radius-1);
        padding: 15px 20px;
        border-radius: 15px;
        width: 535px;
    }

    section.contact div.form-content label{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    section.contact div.form-content label span{
        font-size: var(--fs-6);
        font-weight: 200;
    }

    section.contact div.form-content label div.input{
        display: flex;
        gap: 10px;
        background-color: var(--input-bg);
        border-radius: 8px;
        padding: 10px;
        color: var(--raw-seinna);
    }

    section.contact div.form-content label div.input textarea{
        height: 100px;
    }

    section.contact div.form-content input[type="button"]{
        background-color: #1f1f1f;
        color: var(--white);
        padding: 10px;
        border-radius: 8px;
    }

    @media screen and (max-width: 1000px) {
        section.contact{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }

        section.contact div.form-content{
            max-width: 100%;
        }
    }

    @media screen and (max-width: 700px){
        section.contact{
            display: flex;
            justify-content: space-around;
            padding: 80px 20px;
            gap: 20px;
        }
    }
</style>