<script setup>
import { ref } from 'vue';

const showCertModal = ref(false);

</script>

<template>
    <div>
        <!-- Certificate Section -->
        <section id="certificate" class=" tw-text-white tw-py-16 tw-px-6 md:tw-px-20">
            <div class="tw-text-center tw-mb-10">
                <h2 class="tw-text-4xl tw-font-semibold">Certification</h2>
                <p class="tw-text-sm tw-text-gray-600">Recognized for completing Data Science 101 by IBM</p>
            </div>

            <div
                class="tw-max-w-2xl tw-mx-auto tw-bg-gray-100 tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-gap-6">
                <img src="/assets/images/certificate.png" alt="Python Certificate"
                    class="tw-w-full md:tw-w-[300px] tw-rounded tw-shadow-md" />
                <div class="tw-flex-1">
                    <h3 class="tw-text-2xl tw-font-bold tw-text-gray-800">Data Science 101 Certificate</h3>
                    <p class="tw-text-sm tw-text-gray-600 tw-my-3">
                        Issued by <span class="tw-font-semibold">Cognitive Class</span> and powered by IBM Developer
                        Skills
                        Network.
                        This certification validates successful completion of Data Science fundamentals including
                        Python,
                        data analysis, and visualization.
                    </p>
                    <p class="tw-text-xs tw-text-gray-400">Date: July 18, 2025</p>
                    <button @click="showCertModal = true"
                        class="tw-inline-block tw-mt-2 tw-bg-[#ff004f] tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-bg-[#d40040] tw-transition">
                        View Certificate 🔗
                    </button>
                </div>
            </div>
        </section>

        <!-- Modal -->
        <div v-if="showCertModal"
            class="tw-fixed tw-inset-0 tw-bg-black/40 tw-flex tw-items-center tw-justify-center tw-z-50 tw-backdrop-blur-sm">
            <div
                class="tw-bg-white tw-rounded-xl tw-overflow-hidden tw-shadow-xl tw-w-[90%] md:tw-w-[60%] tw-max-w-3xl">
                <!-- Header -->
                <div class="tw-flex tw-justify-between tw-items-center tw-p-4 tw-border-b">
                    <h2 class="tw-text-xl tw-font-semibold tw-text-gray-800"> Data Science 101 by IBM</h2>
                    <button @click="showCertModal = false" class="tw-text-gray-600 hover:tw-text-red-500">
                        <i class="pi pi-times tw-text-xl"></i>
                    </button>
                </div>

                <!-- Certificate Image -->
                <div class="tw-p-4 tw-bg-gray-50 tw-flex tw-justify-center">
                    <img src="/assets/images/certificate.png" alt="Python Certificate"
                        class="tw-w-full tw-max-h-[80vh] tw-object-contain" />
                </div>
            </div>
        </div>
    </div>
</template>