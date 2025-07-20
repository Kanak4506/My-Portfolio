<script setup>
import { ref } from "vue";
import "primeicons/primeicons.css";
import Email from "./portfolioContact.vue";
import CertificateSection from "./certificateSection.vue";

const myProjects = ref([
   // ⚡ Featured Projects
   {
      imageLocation: "/assets/images/erp.png",
      title: "Smart School ERP System",
      redirectLink: "https://www.roshnieducation.com/principal",
      tech: 'Vue Js | Tailwind CSS | Node JS | Express JS | MongoDb'
   },
   {
      imageLocation: "/assets/images/companyProfile.png",
      title: "Company Profile for Satyaansh Softech",
      redirectLink: "https://www.satyaanshSoftech.com",
      tech: 'React JS | Prime React'
   },
   {
      imageLocation: "/assets/images/fakeNewsDetector.png",
      title: "Fake News Detection using ML",
      redirectLink: "https://www.roshnieducation.com",
      tech: 'Python | Machine Learning | Pandas'
   },

   // 📊 Data Dashboards
   {
      imageLocation: "/assets/images/hospitalDashboard.png",
      title: "Hospital Analytics Dashboard",
      redirectLink: "https://github.com/Kanak4506/Hospital-Frontend",
      tech: 'Vue Js | Tailwind CSS | Node JS | Express JS | DuckDB'
   },
   {
      imageLocation: "/assets/images/dashboard.png",
      title: "CoreUI Data Dashboard",
      redirectLink: "https://github.com/Kanak4506/CoreUI-Dashboard",
      tech: 'Vue Js | Tailwind CSS | Node JS | Express JS | PostgreSQL'
   },

   // 🛒 E-Commerce & Utility Apps
   {
      imageLocation: "/assets/images/tomato.png",
      title: "Tomato - Food Delivery App",
      redirectLink: "https://github.com/Kanak4506/Food-Delivery--Tomato-----Frontend",
      tech: 'MERN Stack'
   },
   {
      imageLocation: "/assets/images/fruitable.png",
      title: "Fruitables - Grocery UI",
      redirectLink: "https://github.com/Kanak4506/15.-Vue-Project",
      tech: 'Vue Js | Tailwind | Node JS'
   },
   {
      imageLocation: "/assets/images/paint.png",
      title: "Color Splash - Paint App",
      redirectLink: "https://github.com/Kanak4506/Paint-Project",
      tech: 'Vue Js | Tailwind CSS | PrimeVue'
   },
   {
      imageLocation: "/assets/images/edWeb.png",
      title: "Educational Portal for Roshni",
      redirectLink: "https://www.roshnieducation.com",
      tech: 'Vue Js | Tailwind CSS | PrimeVue | Nodemailer'
   },

   // 💬 Real-Time & Interactive Apps
   {
      imageLocation: "/assets/images/chat.png",
      title: "Chatty - Real-time Messaging App",
      redirectLink: "https://github.com/Kanak4506/Real-Chat-Application---Chatty",
      tech: 'MERN Stack'
   },
   {
      imageLocation: "/assets/images/dashboard.png",
      title: "SpendSmart - Expense Tracker",
      redirectLink: "https://github.com/Kanak4506/RN---SpendSmart---Frontend",
      tech: 'React Native | Expo | Node JS'
   },

   // 🌦️ Mini Web Utilities
   {
      imageLocation: "/assets/images/weather.png",
      title: "SkyCast - Weather Forecast App",
      redirectLink: "https://weather-six-ivory.vercel.app/",
      tech: 'HTML | CSS | JS | Rest APIs'
   },
   {
      imageLocation: "/assets/images/rockPaper.png",
      title: "Rock-Paper-Scissors Game",
      redirectLink: "https://github.com/Kanak4506/rock-paper-game",
      tech: 'Vue Js | Tailwind CSS'
   },
   {
      imageLocation: "/assets/images/solarSystem.png",
      title: "Interactive Solar System Model",
      redirectLink: "https://mysolarsystem-psi.vercel.app/",
      tech: 'HTML | CSS | JS'
   },
   {
      imageLocation: "/assets/images/dirEngine.png",
      title: "DirEngine - Travel Advisor",
      redirectLink: "https://direngine.vercel.app/",
      tech: 'HTML | CSS | JS'
   },
   {
      imageLocation: "/assets/images/yoga.png",
      title: "Relaxo - Yoga for Peace",
      redirectLink: "https://github.com/Kanak4506/jo-hoga-yoga-se-hoga",
      tech: 'HTML | CSS | JS'
   },
])

</script>

<template>
   <div class="tw-scroll-smooth tw-flex tw-justify-center tw-bg-black tw-text-white">
      <div class="tw-w-5/6">
         <!-- # Intro -->
         <div id="about" class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-flex-col tw-text-3xl tw-font-bold">
               <span class="tw-my-3 tw-text-2xl">Full Stack Developer</span>
               <span>
                  Hi, I'm
                  <span class="tw-text-[#e60e50]">Kanak</span>
               </span>
               <span>Sehrawat from India</span>
               <span class="tw-mt-3 tw-text-lg tw-font-semibold">
                  I'm a dedicated full-stack developer with a passion for
                  creating efficient, user-friendly web applications.
                  <br />
                  I enjoy solving complex problems and continuously learning new
                  technologies to deliver impactful solutions.
               </span>
            </div>
            <div class="tw-h-64 tw-w-64 tw-overflow-hidden tw-rounded-full">
               <img class="tw-rounded-full tw-object-cover" src="/assets/images/ppic.jpg " alt="" />
            </div>
         </div>

         <!-- # Skills And Education Section -->
         <div id="qualification" class="tw-my-20 tw-flex tw-flex-wrap tw-justify-between sm:tw-flex-nowrap">
            <!-- # Skills -->
            <div>
               <span class="tw-rounded tw-border-b-2 tw-border-[#e60e50] tw-text-xl">
                  Skills
               </span>
               <div>
                  <div class="tw-my-3 tw-flex tw-flex-col">
                     <span class="tw-text-[#ec5381]">Frontend Development</span>
                     <span>
                        HTML, CSS ( Tailwind, Boostrap, Bulma) , JS, Vue JS, React Js
                     </span>
                  </div>
                  <div class="tw-my-3 tw-flex tw-flex-col">
                     <span class="tw-text-[#ec5381]">Backend Development</span>
                     <span>
                        Node JS, Express JS, Python (Pandas, NumPy), DuckDb
                     </span>
                  </div>
                  <div class="tw-my-3 tw-flex tw-flex-col">
                     <span class="tw-text-[#ec5381]">Database</span>
                     <span>MongoDb</span>
                     <span>Database Analysis: Qlik</span>
                     <span>Relational Databases: PostgreSQL</span>
                     <span>Database Management Tool: DBeaver</span>
                  </div>
               </div>
            </div>

            <!-- # Education -->
            <div>
               <span class="tw-rounded tw-border-b-2 tw-border-[#e60e50] tw-text-xl">
                  Education
               </span>
               <div>
                  <div class="tw-my-3 tw-flex tw-flex-col">
                     <span class="tw-text-[#ec5381]">
                        Bachelor of Computer Applications
                     </span>
                     <span>
                        International Institute of Technology and Management
                        <span class="tw-text-sm">( Murthal )</span>
                     </span>
                     <span>2024 - 2027</span>
                  </div>
                  <div class="tw-my-3 tw-flex tw-flex-col">
                     <span class="tw-text-[#ec5381]">12th Non-Medical</span>
                     <span>
                        Hare Krishna International Sr. Sec. School
                        <span class="tw-text-sm">( Samalkha )</span>
                     </span>
                     <span>2023 - 2024</span>
                     <span>
                        <span class="tw-text-[#e17999]">Marks Scored -</span>
                        92.8%
                     </span>
                  </div>
                  <div class="tw-my-3 tw-flex tw-flex-col">
                     <span class="tw-text-[#ec5381]">10th</span>
                     <span>
                        Hare Krishna International Sr. Sec. School
                        <span class="tw-text-sm">( Samalkha )</span>
                     </span>
                     <span>2021 - 2022</span>
                     <span>
                        <span class="tw-text-[#e17999]">Marks Scored -</span>
                        93.2%
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <!-- # My Projects -->
         <div id="project">
            <span class="tw-text-3xl tw-font-bold">My Projects</span>
            <div class="tw-gap-10 tw-justify-center tw-my-10 tw-flex  tw-flex-wrap sm:tw-justify-between sm:tw-gap-24">
               <!-- # Projects -->
               <div v-for="(each, index) in myProjects" :key="index"
                  class="tw-group tw-flex-col tw-flex tw-relative tw-cursor-pointer tw-overflow-hidden tw-rounded">
                  <img class="tw-block tw-h-[180px] tw-object-cover tw-w-[200px]" :src="each.imageLocation" alt="" />
                  <div
                     class="layer tw-absolute tw-bottom-0 tw-left-0 tw-hidden tw-h-full tw-w-[200px] tw-flex-col tw-items-center tw-justify-center tw-overflow-hidden group-hover:tw-flex">
                     <span class="tw-font-yatra">{{ each.title }}</span>
                     <div>
                        <a :href="each.redirectLink" target="blank">
                           <i class="pi pi-external-link"></i>
                        </a>
                     </div>
                  </div>
                  <span class="tw-font-yatra  tw-max-w-[200px]">{{ each.title }}</span>
                  <span class="tw-italic tw-text-xs  tw-max-w-[200px]">{{ each.tech }}</span>
               </div>
            </div>
         </div>
         <CertificateSection />

         <!-- # Contact Me -->
         <Email />
      </div>
   </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Yatra+One&display=swap");

.layer {
   background: linear-gradient(rgba(0, 0, 0, 0.6), #ff004f);
   animation: projectsFlow 0.6s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
   /* Added 'forwards' */
}

@keyframes projectsFlow {
   0% {
      transform: translateY(20%);
      opacity: 0;
   }

   100% {
      transform: translateY(0%);
      opacity: 1;
   }
}
</style>
