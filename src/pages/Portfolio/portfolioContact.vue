<script setup>
import { ref } from "vue";

import emailjs from "emailjs-com";
import ProgressSpinner from "primevue/progressspinner";
import DownloadCV from "./downloadCV.vue";

const email = ref("");
const name = ref("");
const message = ref("");
const responseMessage = ref("");
const isMailSending = ref(false);
const sendEmail = () => {
   isMailSending.value = true;

   //These parameters are made in template in Email Js
   const templateParams = {
      email: email.value,
      name: name.value,
      message: message.value,
   };


   emailjs
      .send(
         "service_50v228r", // service ID
         "template_9icouvw", //template ID 
         templateParams,
         "nQSZl9kTIxNJD5mtx", //  public ID
      )
      .then(() => {
         // Auto-reply 
         const autoReplyParams = {
            email: email.value, // user's email
            name: name.value, //user's name
         };

         return emailjs.send(
            "service_50v228r", // same service ID
            "template_tnczvzl", //  auto-reply template ID
            autoReplyParams,
            "nQSZl9kTIxNJD5mtx", // public ID
         );
      })
      .then(() => {
         responseMessage.value =
            "Email sent successfully!";
         // Clear the fields
         name.value = "";
         email.value = "";
         message.value = "";
         setTimeout(() => {
            responseMessage.value = "";
            isMailSending.value = false;
         }, 3000);
      })
      .catch((error) => {
         responseMessage.value = "Failed to send the email.";
         setTimeout(() => {
            responseMessage.value = "";
            isMailSending.value = false;
         }, 3000);
      });
};
</script>
<template>
   <!-- # Contact Me -->
   <div id="contact" class="tw-my-20 tw-bg-black tw-text-white tw-p-6 sm:tw-p-10 md:tw-p-14 lg:tw-p-20">
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-10">
         <!-- Left Info Section -->
         <div class="tw-flex-1 tw-space-y-6">
            <span class="tw-text-4xl tw-font-bold tw-tracking-wide">
               Contact Me
            </span>

            <div class="tw-space-y-3">
               <div class="tw-flex tw-items-center tw-gap-4">
                  <i class="pi pi-send tw-text-[#ff004f]"></i>
                  <span>work.kanak.s@gmail.com</span>
               </div>
               <div class="tw-flex tw-items-center tw-gap-4">
                  <i class="pi pi-github tw-text-[#ff004f]"></i>
                  <span>github.com/Kanak4506</span>
               </div>
               <div class="tw-flex tw-items-center tw-gap-4">
                  <i class="pi pi-linkedin tw-text-[#ff004f]"></i>
                  <span>Kanak Sehrawat</span>
               </div>
               <div class="tw-flex tw-items-center tw-gap-4">
                  <i class="pi pi-phone tw-text-[#ff004f]"></i>
                  <span>870-850-8436</span>
               </div>
            </div>

            <div class="tw-flex tw-gap-4 tw-text-xl">
               <i class="pi pi-facebook tw-text-[#aaa8a8] hover:tw-text-[#ff004f] tw-cursor-pointer"></i>
               <i class="pi pi-twitter tw-text-[#aaa8a8] hover:tw-text-[#ff004f] tw-cursor-pointer"></i>
               <i class="pi pi-instagram tw-text-[#aaa8a8] hover:tw-text-[#ff004f] tw-cursor-pointer"></i>
               <i class="pi pi-linkedin tw-text-[#aaa8a8] hover:tw-text-[#ff004f] tw-cursor-pointer"></i>
            </div>

            <div>
               <DownloadCV />
            </div>
         </div>

         <!-- Form Section -->
         <form @submit.prevent="sendEmail" class="tw-flex-1 tw-space-y-4">
            <div class="tw-flex tw-flex-col tw-gap-4">
               <input v-model="name"
                  class="tw-rounded tw-bg-[#252525] tw-p-3 tw-outline-none hover:tw-outline-[#ff004f]" type="text"
                  placeholder="Your name" />
               <input v-model="email"
                  class="tw-rounded tw-bg-[#252525] tw-p-3 tw-outline-none hover:tw-outline-[#ff004f]" type="email"
                  placeholder="Your Email" />
               <textarea v-model="message"
                  class="tw-min-h-40 tw-rounded tw-bg-[#252525] tw-p-3 tw-outline-none hover:tw-outline-[#ff004f]"
                  placeholder="Your Message"></textarea>

               <button type="submit"
                  class="tw-my-3 tw-rounded tw-bg-[#ff004f] tw-px-10 tw-py-3 tw-font-semibold tw-w-fit">
                  <span v-if="!isMailSending">Send Email</span>
                  <ProgressSpinner v-else style="width: 30px; height: 30px" strokeWidth="8" fill="transparent"
                     animationDuration=".5s" aria-label="Custom ProgressSpinner" />
               </button>
            </div>

            <div v-if="responseMessage" class="tw-mt-4 tw-text-green-400">
               {{ responseMessage }}
            </div>
         </form>
      </div>
   </div>
</template>


<style scoped></style>
